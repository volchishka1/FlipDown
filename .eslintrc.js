module.exports = {
  overrides: [
    // config for config files like examplerc.js or example.config.js
    {
      env: { amd: true, commonjs: true, es2022: true, node: true },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      files: ['**/*.config.js', '**/{,.}*rc*.js', '*er*.js'],
      plugins: ['import'],
      rules: {
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            groups: [
              'builtin',
              'external',
              'index',
              'internal',
              'object',
              'parent',
              'sibling',
              'unknown',
            ],
            'newlines-between': 'always',
            pathGroups: [
              { group: 'builtin', pattern: 'react-native', position: 'before' },
              { group: 'builtin', pattern: 'react', position: 'before' },
            ],
            pathGroupsExcludedImportTypes: ['react', 'react-native'],
          },
        ],
      },
    },
    // config for JSON files like example.json
    {
      extends: [
        'eslint:recommended',
        'plugin:jsonc/base',
        'plugin:jsonc/recommended-with-json',
        'plugin:jsonc/prettier',
        'plugin:json-schema-validator/recommended',
        'plugin:prettier/recommended',
      ],
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
    },
    // config for test files like example.test.ts or example.test.tsx
    {
      env: { es2022: true, jest: true, node: true },
      extends: [
        'eslint:recommended',
        '@react-native-community',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:prettier/recommended',
      ],
      files: ['**/*.test.ts{x,}'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: ['./tsconfig.json'], tsconfigRootDir: __dirname },
      plugins: ['@typescript-eslint', 'jest', 'import', 'unused-imports'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            groups: [
              'builtin',
              'external',
              'index',
              'internal',
              'object',
              'parent',
              'sibling',
              'unknown',
            ],
            'newlines-between': 'always',
            pathGroups: [
              { group: 'builtin', pattern: 'react-native', position: 'before' },
              { group: 'builtin', pattern: 'react', position: 'before' },
            ],
            pathGroupsExcludedImportTypes: ['react', 'react-native'],
          },
        ],
        'react/jsx-curly-brace-presence': ['error', 'always'],
        'unused-imports/no-unused-imports': 'error',
      },
      settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': { typescript: { alwaysTryTypes: true } },
      },
    },
    // config for regular TypeScript files like example.ts or example.tsx
    {
      excludedFiles: ['*.test.ts', '*.test.tsx'],
      extends: [
        'eslint:recommended',
        '@react-native-community',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:promise/recommended',
        'plugin:react-redux/recommended',
        'plugin:react-native-a11y/all',
      ],
      files: ['**/*.ts{x,}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: [
        '@typescript-eslint',
        'const-case',
        'deprecation',
        'import',
        'no-secrets',
        'promise',
        'react-hooks',
        'react-redux',
        'this',
        'unused-imports',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Boolean: { fixWith: 'boolean', message: 'Use boolean instead' },
              Function: {
                message:
                  'The `Function` type accepts any function-like value.\nIt provides no type safety when calling the function, which can be a common source of bugs.\nIt also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\nIf you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
              },
              Number: { fixWith: 'number', message: 'Use number instead' },
              Object: {
                message:
                  'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
              },
              String: { fixWith: 'string', message: 'Use string instead' },
              Symbol: { fixWith: 'symbol', message: 'Use symbol instead' },
              object: {
                message:
                  'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).\nConsider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
              },
            },
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'deprecation/deprecation': 'error',
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            groups: [
              'builtin',
              'external',
              'index',
              'internal',
              'object',
              'parent',
              'sibling',
              'unknown',
            ],
            'newlines-between': 'always',
            pathGroups: [
              { group: 'builtin', pattern: 'react-native', position: 'before' },
              { group: 'builtin', pattern: 'react', position: 'before' },
            ],
            pathGroupsExcludedImportTypes: ['react', 'react-native'],
          },
        ],
        'no-secrets/no-secrets': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/destructuring-assignment': ['error', 'always'],
        'react/display-name': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': ['error', 'always'],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/no-array-index-key': 'error',
        'react/no-deprecated': 'error',
        'react/no-namespace': 'error',
        'this/no-this': 'error',
        'unused-imports/no-unused-imports': 'error',
      },
      settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': { typescript: { alwaysTryTypes: true } },
      },
    },
    // config for regular JavaScript files like example.js or example.jsx
    {
      excludedFiles: ['**/*.config.js', '**/{,.}*rc*.js', '*er*.js'],
      extends: [
        'eslint:recommended',
        '@react-native-community',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
      ],
      files: ['**/*.js{x,}'],
      plugins: ['import', 'this'],
      rules: {
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            groups: [
              'builtin',
              'external',
              'index',
              'internal',
              'object',
              'parent',
              'sibling',
              'unknown',
            ],
            'newlines-between': 'always',
            pathGroups: [
              { group: 'builtin', pattern: 'react-native', position: 'before' },
              { group: 'builtin', pattern: 'react', position: 'before' },
            ],
            pathGroupsExcludedImportTypes: ['react', 'react-native'],
          },
        ],
        'react/jsx-curly-brace-presence': ['error', 'always'],
        'this/no-this': 'error',
      },
    },
    // config for Markdown files like example.md or example.markdown
    {
      extends: ['plugin:prettier/recommended', 'plugin:md/recommended'],
      files: ['*.md', '*.markdown'],
      parser: 'markdown-eslint-parser',
      rules: { 'prettier/prettier': ['error', { parser: 'markdown' }] },
    },
  ],
};
