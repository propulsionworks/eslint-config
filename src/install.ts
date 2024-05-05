import assert from "node:assert";
import { spawnSync } from "node:child_process";
import { Stats } from "node:fs";
import { readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type Package = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  name?: string;
  packageManager?: string;
  peerDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
  version?: string;
};

export async function install(path = "."): Promise<void> {
  const ourPackageJsonPath = await findPackageJson(
    dirname(fileURLToPath(import.meta.url)),
  );
  assert(ourPackageJsonPath, "package json not found");

  const ourPackageJson = JSON.parse(
    await readFile(ourPackageJsonPath, "utf8"),
  ) as Package;

  assert(ourPackageJson.name, "package should have a name");
  assert(ourPackageJson.version, "package should have a version");

  assert(
    ourPackageJson.devDependencies?.["prettier"],
    "package should include prettier",
  );
  assert(
    ourPackageJson.devDependencies["eslint"],
    "package should include eslint",
  );

  let theirPackageJsonPath = await findPackageJson(path);
  let theirPackageJson: Package;

  if (theirPackageJsonPath) {
    theirPackageJson = JSON.parse(await readFile(theirPackageJsonPath, "utf8"));
  } else {
    theirPackageJsonPath = resolve("package.json");
    theirPackageJson = {};
  }

  theirPackageJson.devDependencies = mergeAlphabetically(
    theirPackageJson.devDependencies,
    ourPackageJson.name,
    `^${ourPackageJson.version}`,
  );

  // add prettier and eslint directly to deps so that IDE can find them too
  if (!theirPackageJson.devDependencies["prettier"]) {
    theirPackageJson.devDependencies = mergeAlphabetically(
      theirPackageJson.devDependencies,
      "prettier",
      ourPackageJson.devDependencies["prettier"],
    );
  }
  if (!theirPackageJson.devDependencies["eslint"]) {
    theirPackageJson.devDependencies = mergeAlphabetically(
      theirPackageJson.devDependencies,
      "eslint",
      ourPackageJson.devDependencies["eslint"],
    );
  }

  // add lint script
  if (!theirPackageJson.scripts?.["lint"]) {
    theirPackageJson.scripts = mergeAlphabetically(
      theirPackageJson.scripts,
      "lint",
      "eslint src",
    );
  }

  const packageRootPath = dirname(theirPackageJsonPath);

  await writeWithFormatting(
    theirPackageJsonPath,
    JSON.stringify(theirPackageJson, undefined, 2),
  );

  let packageManager = "npm";

  if (theirPackageJson.packageManager) {
    const atIndex = theirPackageJson.packageManager.indexOf("@");
    assert(atIndex > 0, "invalid packageManager field");
    packageManager = theirPackageJson.packageManager.slice(0, atIndex);
  } else if (await tryStat(join(packageRootPath, "yarn.lock"))) {
    packageManager = "yarn";
  } else if (await tryStat(join(packageRootPath, "pnpm-lock.yaml"))) {
    packageManager = "pnpm";
  }

  spawnSync(packageManager, ["install"], {
    cwd: packageRootPath,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  // rewrite this file now that we've installed prettier
  await writeWithFormatting(
    theirPackageJsonPath,
    await readFile(theirPackageJsonPath, "utf8"),
  );

  const configTemplate = await readFile(
    join(dirname(ourPackageJsonPath), "eslint.config.template.js"),
    "utf8",
  );

  await writeWithFormatting(
    join(packageRootPath, "eslint.config.js"),
    configTemplate,
  );

  // vscode needs an empty prettier config file or it will use its own config
  const prettierRcPath = join(packageRootPath, ".prettierrc.json");
  if (!(await tryStat(prettierRcPath))) {
    await writeWithFormatting(prettierRcPath, "{}");
  }
}

async function findPackageJson(path = "."): Promise<string | undefined> {
  for (
    let currentFolder = resolve(path);
    dirname(currentFolder) !== currentFolder; // check if not FS root
    currentFolder = dirname(currentFolder)
  ) {
    const currentFile = join(currentFolder, "package.json");
    if (await tryStat(currentFile)) {
      return currentFile;
    }
  }
}

function mergeAlphabetically<T, K extends string, V>(
  object: T | undefined,
  key: K,
  value: V,
): T & Record<K, V> {
  const entries = object
    ? Object.entries(object).filter(([k]) => k !== key)
    : [];

  entries.push([key, value]);
  entries.sort(([a], [b]) => a.localeCompare(b));
  return Object.fromEntries(entries) as T & Record<K, V>;
}

async function tryStat(path: string): Promise<Stats | undefined> {
  try {
    return await stat(path);
  } catch (cause: any) {
    if (cause?.code !== "ENOENT") {
      throw cause;
    }
  }
}

async function writeWithFormatting(path: string, data: string): Promise<void> {
  let formattedData: string;

  try {
    const prettier = await import("prettier");
    const prettierConfig = await prettier.resolveConfig(path);

    formattedData = await prettier.format(data, {
      ...prettierConfig,
      filepath: path,
    });
  } catch (cause: any) {
    if (cause?.code !== "ERR_MODULE_NOT_FOUND") {
      throw cause;
    }
    formattedData = data;
  }

  await writeFile(path, formattedData);
}
