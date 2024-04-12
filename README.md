# typescript-start
Type Script Start

## Comandos NPM INSTALL

- npm install @types/node --save-dev
- npm install typescript --save-dev
- npm install tslint typescript --save-dev
- npx tsc --init -- criação do arquivo de configuração
- npm install ts-node-dev --save-dev
- npm install tsconfig-paths --save-dev

## Explicação da Configuração

### Extends
- **extends**: Utiliza as regras recomendadas pelo TSLint como base.

### Regras
- **curly**: Exige que os blocos utilizem chaves.
- **indent**: Enforce consistent indentation (neste caso, espaços com 2 de tamanho).
- **no-console**: Proíbe o uso de `console.log` e `console.error`.
- **no-var-keyword**: Proíbe o uso da declaração `var`, preferindo `let` ou `const`.
- **object-literal-sort-keys**: Desabilitado; não exige que as chaves de objeto literais sejam ordenadas.
- **ordered-imports**: Desabilitado; não exige que os imports sejam ordenados.
- **quotemark**: Exige o uso de aspas simples.
- **semicolon**: Exige o uso de ponto e vírgula ao final de instruções.
- **triple-equals**: Exige o uso de `===` e `!==`, permitindo verificações contra `null`.
- **tslint:latest**: Utiliza as últimas regras do TSLint.
- **no-unused-variable**: Proíbe variáveis que são declaradas mas nunca usadas.
- **no-use-before-declare**: Proíbe o uso de variáveis antes de serem declaradas.
- **align**: Exige alinhamento em declarações de várias linhas.

### Linter Options
- **linterOptions**: Configurações adicionais para o linter, como excluir arquivos dentro de `node_modules`.
