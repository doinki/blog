import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
// @ts-expect-error
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
// @ts-expect-error
import eslintPluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
// @ts-expect-error
import eslintPluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';

export function generateConfig(): ConfigWithExtends {
  return {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'sort-destructure-keys': eslintPluginSortDestructureKeys,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'sort-keys-fix': eslintPluginSortKeysFix,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'typescript-sort-keys': eslintPluginTypescriptSortKeys,
    },
    rules: {
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      'sort-destructure-keys/sort-destructure-keys': 'warn',
      'sort-keys-fix/sort-keys-fix': 'warn',
      'typescript-sort-keys/interface': 'warn',
      'typescript-sort-keys/string-enum': 'warn',
    },
  };
}
