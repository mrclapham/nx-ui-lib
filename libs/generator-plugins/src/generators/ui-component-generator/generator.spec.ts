import { type Tree } from '@nx/devkit';
import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
} from '@nx/devkit';
import * as path from 'path';

import {
  renameFilesAndDirs,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  uiComponentGeneratorGenerator,
} from './generator';
import { type UiComponentGeneratorGeneratorSchema } from './schema';

const createMockTree = (): jest.Mocked<Tree> =>
  ({
    children: jest.fn().mockReturnValue([]),
    isFile: jest.fn().mockReturnValue(true),
    rename: jest.fn(),
  } as unknown as jest.Mocked<Tree>);

jest.mock('@nx/devkit', () => ({
  addProjectConfiguration: jest.fn(),
  generateFiles: jest.fn(),
  formatFiles: jest.fn(),
  names: jest.fn().mockReturnValue({ fileName: 'test-component' }),
}));

const options: UiComponentGeneratorGeneratorSchema = {
  name: 'TestComponent',
  componentType: 'atoms',
};

describe('uiComponentGeneratorGenerator', () => {
  describe('string Functions', () => {
    describe('toKebabCase', () => {
      it('should convert a string to kebab case', () => {
        expect(toKebabCase('TestComponent')).toEqual('test-component');
      });
    });
  });

  describe('toCamelCase', () => {
    it('should convert a string to camel case', () => {
      expect(toCamelCase('test-component')).toEqual('testComponent');
    });
  });

  describe('toPascalCase', () => {
    it('should convert a string to pascal case', () => {
      expect(toPascalCase('test-component')).toEqual('TestComponent');
    });
  });

  describe('uiComponentGeneratorGenerator', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should generate component files and configurations', async () => {
      const tree = createMockTree();

      await uiComponentGeneratorGenerator(tree, options);

      expect(addProjectConfiguration).toHaveBeenCalledWith(
        tree,
        'TestComponent',
        expect.objectContaining({
          root: 'libs/ui-components/src/components/atoms/test-component',
          projectType: 'library',
          sourceRoot:
            'libs/ui-components/src/components/atoms/test-component/src',
          targets: {},
        }),
      );

      expect(generateFiles).toHaveBeenCalledWith(
        tree,
        expect.stringContaining(path.join('files')),
        'libs/ui-components/src/components/atoms/test-component',
        expect.objectContaining({
          name: 'test-component',
          camelName: 'testComponent',
          pascalName: 'TestComponent',
          componentType: 'atoms',
          template: '',
        }),
      );

      expect(formatFiles).toHaveBeenCalledWith(tree);
    });
  });

  describe('renameFilesAndDirs', () => {
    it('should rename files and directories', () => {
      const tree = createMockTree();
      tree.children.mockImplementation((dir) => {
        if (dir === 'libs/ui-components/src/components/atoms/test-component') {
          return ['template.tsx', 'template.spec.tsx', 'template'];
        }
        if (
          dir ===
          'libs/ui-components/src/components/atoms/test-component/template'
        ) {
          return ['nested-file.tsx'];
        }
        return [];
      });
      tree.isFile.mockImplementation((path) => !path.endsWith('template'));

      const dir = 'libs/ui-components/src/components/atoms/test-component';

      renameFilesAndDirs(tree, dir, 'template', 'test-component');

      expect(tree.rename).toHaveBeenCalledWith(
        'libs/ui-components/src/components/atoms/test-component/template.tsx',
        'libs/ui-components/src/components/atoms/test-component/test-component.tsx',
      );

      expect(tree.children).toHaveBeenCalledWith(
        'libs/ui-components/src/components/atoms/test-component/template',
      );
    });
  });
});
