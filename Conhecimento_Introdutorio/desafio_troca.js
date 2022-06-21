let a = 7;
let b = 94;

console.log("'a' é: "+a)
console.log("'b' é: "+b)
console.log("NOVOS VALORES!")

let temp = a; // assim é possível trocar a e b. Criando uma 'variável temporária'
a = b;
b = temp;

console.log("'a' é: "+a)
console.log("'b' é: "+b)
;