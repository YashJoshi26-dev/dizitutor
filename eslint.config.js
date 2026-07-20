import js from '@eslint/js' // ESLint JS rules
import globals from 'globals' // browser globals definitions
import reactHooks from 'eslint-plugin-react-hooks' // React hooks lint plugin
import reactRefresh from 'eslint-plugin-react-refresh' // Vite refresh lint plugin
import { defineConfig, globalIgnores } from 'eslint/config' // ESLint config helpers

export default defineConfig([
  globalIgnores(['dist']), // ignore build outputs
  {
    files: ['**/*.{js,jsx}'], // lint JS and JSX files
    extends: [
      js.configs.recommended, // base JS rules
      reactHooks.configs.flat.recommended, // React hooks rules
      reactRefresh.configs.vite, // Vite React refresh rules
    ],
    languageOptions: {
      globals: globals.browser, // browser globals available
      parserOptions: { ecmaFeatures: { jsx: true } }, // enable JSX parsing
    },
  },
])
