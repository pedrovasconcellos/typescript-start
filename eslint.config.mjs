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
    '@typescript-eslint/no-array-constructor': 'warn',
    // Adicione mais regras conforme necessário

    // Regras de Estilo
    'quotes': ['error', 'single'], // Aspas simples
    'brace-style': ['error', '1tbs'], // Estilo de colocação de chaves
    'camelcase': 'error', // Nomes de variáveis em camelCase

    // Práticas Recomendadas
    'no-constant-condition': 'warn', // Evita condições constantes em loops
    'no-eval': 'error', // Desativa o uso de eval()
    'no-unused-vars': 'warn', // Alerta sobre variáveis não utilizadas

    // Detecção de Código Morto
    'no-unreachable': 'error', // Código que nunca será executado

    // Complexidade do Código
    'complexity': ['warn', 10], // Limita a complexidade ciclomática

    // Segurança
    'no-inline-comments': 'off',
    //'security/detect-object-injection': 'off', // Específico de plugins de segurança
    //'security/detect-non-literal-fs-filename': 'warn' // Evita manipulação insegura de nomes de arquivos
  }
};
