import { type Tree } from '@nx/devkit';
import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
} from '@nx/devkit';
import * as path from 'path';

import { type UiComponentGeneratorGeneratorSchema } from './schema';

export const toKebabCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const toCamelCase = (str: string): string =>
  str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

export const toPascalCase = (str: string): string =>
  str.replace(/(^|-)([a-z])/g, (_, separator, letter) => letter.toUpperCase());

export const renameFilesAndDirs = (
  tree: Tree,
  dir: string,
  oldName: string,
  newName: string,
) => {
  const entries = tree.children(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    if (tree.isFile(fullPath)) {
      if (entry.includes(oldName)) {
        const newFileName = entry.replace(oldName, newName);
        tree.rename(fullPath, path.join(dir, newFileName));
      }
    } else {
      renameFilesAndDirs(tree, fullPath, oldName, newName);
      if (entry === oldName) {
        tree.rename(fullPath, path.join(dir, newName));
      }
    }
  }
};

export  async function generator(
  tree: Tree,
  options: UiComponentGeneratorGeneratorSchema,
) {
  const componentName = names(options.name).fileName;
  const kebabComponentName = toKebabCase(componentName);
  const camelComponentName = toCamelCase(componentName);
  const pascalName = toPascalCase(componentName);
  const componentType = options.componentType;
  const projectRoot = `libs/ui-components/src/components/${componentType}/${kebabComponentName}`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...options,
    name: kebabComponentName,
    camelName: camelComponentName,
    pascalName,
    componentType,
    template: '',
  });

  renameFilesAndDirs(tree, projectRoot, 'template', kebabComponentName);

  await formatFiles(tree);
};

export default uiComponentGeneratorGenerator;
