// eslint.config.ts
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'

export default [
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript,
    },
    rules: {
      ...vue.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
    },
  },
  prettier,
]
