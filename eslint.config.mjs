// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Base ESLint recommended config
  eslint.configs.recommended,

  // TypeScript ESLint recommended config
  ...tseslint.configs.recommended,
  // Custom config object
  {
    rules: {
      // Downgrade unused vars to warning
      '@typescript-eslint/no-unused-vars': 'warn',

      // Allow namespaces
      '@typescript-eslint/no-namespace': 'off',

      // Allow undefined globals like `console`
      'no-undef': 'off',
    },
  },
  {
    ignores: ["dist/*"],
  },
];
