import { join } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { config } from 'typescript-eslint';

import * as prettier from './dist/prettier.js';
import * as sort from './dist/sort.js';
import * as ts from './dist/ts.js';

const gitignorePath = join(import.meta.dirname, '..', '..', '.gitignore');

export default config(
  includeIgnoreFile(gitignorePath),
  ts.generateConfig({
    tsconfigRootDir: import.meta.dirname,
  }),
  sort.generateConfigs(),
  prettier.generateConfig(),
);
