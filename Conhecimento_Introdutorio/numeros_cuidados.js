console.log(7/0);
console.log("10"/2);// FUNCIONA...

let num = 10.1235;

//console.log(typeof num);
//console.log(typeof num.toString());



console.log("Teste 1: "+ typeof (10.1254).toFixed(2));
//().toFixed(2) transforma um número em string e, ainda, determina o número de casas decimais ('2', nesse caso) 


console.log("Teste 2: "+10.1754 + "é um número. Int e String se concatenam"); //é possível fazer concatenação MESMO ENTRE INT e STRING

console.log("Teste 3: "+"2+" + 10.1754);//não acontece o cáLculo.

console.log("Teste 3.5: "+(10.1124879865456).toFixed(3));// o método ().toFixed() serve para transformar um int em String E para defeinir o NÚMERO DE CASAS DECIMAIS

console.log("Teste 4: "+(10.2687).toFixed(2)  +  2 + " ; o último algarismo foi concatenado");// com A SOMA, NÃO há cálculo, e sim a concatenação

console.log("Teste 5: "+(10.287998).toFixed(2));// com OUTRAS OPERAÇÕES há, SIM, um cálculo

console.log(typeof (10.12465).toString());

