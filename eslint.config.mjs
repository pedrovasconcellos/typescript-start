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
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      'allowExpressions': true,
      'allowTypedFunctionExpressions': true
    }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-array-constructor': 'warn',
    // Adicione mais regras conforme necessário

    // Regras de Estilo
    'quotes': ['error', 'single'], // Aspas simples
    'brace-style': ['warn', '1tbs'], // Estilo de colocação de chaves
    'camelcase': 'error', // Nomes de variáveis em camelCase

    // Práticas Recomendadas
    'no-constant-condition': 'error', // Evita condições constantes em loops
    'no-eval': 'error', // Desativa o uso de eval()
    //'no-unused-vars': 'warn', // Alerta sobre variáveis não utilizadas

    // Detecção de Código Morto
    'no-unreachable': 'error', // Código que nunca será executado

    // Complexidade do Código
    'complexity': ['warn', 7], // Limita a complexidade ciclomática

    // Segurança
    'no-inline-comments': 'off',

    //----ANALISAR COMO COLOCAR ESTES DOIS ELEMENTOS ----
    //'security/detect-object-injection': 'off', // Específico de plugins de segurança
    //'security/detect-non-literal-fs-filename': 'warn' // Evita manipulação insegura de nomes de arquivos
    //----------------------------------------------------
    
    // Regras estritas
    'eqeqeq': ['error', 'always'], // Força o uso de === e !==
    'strict': ['error', 'global'], // Força 'use strict' globalmente
    'no-implicit-globals': 'error', // Proíbe declarações globais implícitas
    //'no-console': 'warn' // Avisa sobre o uso de console.log
  }
};
