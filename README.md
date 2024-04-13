###Apenas estudando TypeScript

Esse comando instala o typescript no meu projeto de forma local
"npm i typescript" ou "npm install typescript"

---

"npm install typescript -D" ou "npm i -D typescript"
Esse -D indica que o typescript só será usado no desenvolvimento do projeto,
na finalização do projeto ele será ignorado e não usado

"npm install -g typescript"
Esse -g indica que o typescript está instalado de forma global na máquina, podendo ser usado
de qualquer lugar para o node.js

---

Esse comando instala um interpretador e servidor de TypeScript sem a necessidade de transpilar
"npm install ts-node-dev (-D opcional)"


INSTALEI O TypeScript DE FORMA LOCAL NO PROJETO

comando pra transpilar ts:
"npx tsc |caminho-relativo-ao-arquivo-ts|" <- (opcional quando configurado o rootDir)

mexi no rootDir e no outDir
rootDir = quando eu chamar o npx tsc o vai verificar aquela pasta (sem precisar especificar o caminho relativo)

outDir = o código transpilado ira até o lugar especificado

no package.json, em script, eu criei o "start"
- usar o comando npm run |nome-script| para rodar ele

tem também com o ts-node-dev que facilita ainda mais, chamado "start:dev"
(No start:dev, está definido para rodar o index.ts de início)

- ver depois como configurar o tsconfig direito
- o comando que inicia o arquivo tsconfig é "npx tsc --init"
- entender depois como usar o ts-node-dev

link útil: https://dev.to/guiseek/como-iniciar-um-projeto-typescript-381m
