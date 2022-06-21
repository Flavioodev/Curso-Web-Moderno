const personagem = "Jane Eyre";

console.log(personagem.charAt(0));//retorna um caracter (char) no índice indicado nos parênteses, começando sempre em 0
console.log(personagem.charAt(1));
console.log(personagem.charAt(2));
console.log(personagem.charAt(3));
console.log(personagem.charAt(4));
console.log(personagem.charAt(5));


console.log("\n"+personagem.charCodeAt(2));//retorna o valor na tabela Unicode representativo do caracter que se encontra no índice indicado

console.log("\n"+personagem.indexOf("N"));

console.log("\n"+personagem.replace("N","B"));
console.log(personagem.replace("a","o"))

console.log("\nSubstring: ")
console.log(personagem.substring(0));//retorna todos os caracteres à direita (pra frente) do índice indicado
console.log(personagem.substring(2,4));/*
retorna os caracteres entre 2 (incluso) e o 4, mas excluindo o índice 4, representando até o índice 3. */

console.log("\nArray:");
console.log('Ana,Rafaela,João'.split(','));
