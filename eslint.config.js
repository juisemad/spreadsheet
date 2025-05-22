import {fixupPluginRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import eslint from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

export default [
  ...compat.extends('plugin:prettier/recommended', 'prettier'),
  {
    files: ['**/*.ts', '**/*.tsx'],

    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': typescriptEslint,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      camelcase: 'off',
      'linebreak-style': 0,
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'react/jsx-key': 'error',
      '@typescript-eslint/no-use-before-define': ['error'],

      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],

      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': 'off',

      'max-len': [
        'error',
        {
          code: 120,
          ignorePattern: '^import .*',
        },
      ],

      'react/display-name': 'off',

      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: false,
          bracketSameLine: false,
          endOfLine: 'auto',
          arrowParens: 'always',
        },
      ],

      'no-console': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
