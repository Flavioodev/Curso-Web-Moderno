let lider = "Senior";

const subordinado = "Junior";

const concatenacao = subordinado
 + ": olá, "+
 lider+"!";


//usando quebra de linhas no template...
const template = `\n
                ${subordinado}:   
                                             Olá, ${lider}
-sama
`
console.log(concatenacao,template);
//usando template, as quebras de linha são compreendidas


//com o Template String se pode trabalhar com:

//operadores (typeof), expressões matemáticas....
console.log(`1 + 1 = ${typeof 2}`);

console.log(`1 + 1 = ${1 + 1}`);


//funções
const up = texto => texto.toUpperCase();//função que transforma todas as letras em MAIÚSCULAS

console.log( `${up("Gon")}` );