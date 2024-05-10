// Importando o módulo CommonJS corretamente como um módulo ES
import pkg from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';

export default {
  files: ['**/*.ts', '**/*.tsx'], // Especifica quais arquivos analisar
  languageOptions: {
    parser: pkg, // usando a importação default do parser
  },
  plugins: {
    '@typescript-eslint': eslintPlugin,
  },
  rules: {
    // Regras específicas para TypeScript do plugin:@typescript-eslint
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      'allowExpressions': true,
      'allowTypedFunctionExpressions': true
    }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-array-constructor': 'warn'
    // Adicione mais regras conforme necessário
  }
};
