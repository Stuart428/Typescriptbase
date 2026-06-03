// eslint.config.ts
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Downgrade unused vars to warning
      '@typescript-eslint/no-unused-vars': 'warn',

      // Allow namespaces
      '@typescript-eslint/no-namespace': 'warn',

      camelcase: 'error',

      // Allow undefined globals like `console`
      'no-undef': 'off',
    },
  },
  {
    ignores: ['dist/*'],
  },
);