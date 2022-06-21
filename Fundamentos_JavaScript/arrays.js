//criação de um ARRAY
const notas = [7.8, 8, 6.9, 9, 10, 11, 'array', "interface", true]; //pode ser usado let ou var também; nesse caso, é boa prática usar const
console.log("Remoção de um elemento com delete: ")
delete notas [0];
console.log(notas);//o delete cria um elemento 'undefined' no índice exluído; isso me parece um problema
console.log(notas [0]);


console.log("\nTestando remoção de um elementos com splice");
console.log("Antes: "+ notas + "\nDepois de remover o elemento: ");
console.log(notas.splice(2,2));
console.log(notas);

console.log("\nTestando remoção de DOIS elementos com splice");
console.log("Antes: "+ notas + "\nDepois de remover o elemento: ");
console.log(notas.splice(2,2));
console.log(notas);

console.log("\nRemovendo o 'undefined' com splice: ");
console.log(notas.splice(0,1));
console.log(notas);

console.log("\nSplice com while: ")
var buscaIndice = notas.indexOf("interface");//indexOf recebe um valor e retorna o índice; não achando o valor, retorna -1
while(buscaIndice >= 0){
    notas.splice(buscaIndice,1);
    console.log(notas);
    buscaIndice = notas.indexOf("interface");
}


console.log("\nOutros métodos de remoção em arrays: ")
//remover o PRIMEIRO elemento
const novoArray = ["primeiro",{id:3}, false,"último"];
console.log(novoArray);
novoArray.shift();
console.log("Remoção do primeiro elmento: ", novoArray,"\n");

console.log("Remoção do último elemento: ");
novoArray.pop();
console.log(novoArray);

console.log("Adicionando elementos no array com .push:");
novoArray.push({id:"novo"}, "novo elemento string", 10.9);
console.log("Resultado do push: ",novoArray);

console.log(novoArray.unshift("novo primeiro elemento"));
console.log("Resultado do .unshift: ",novoArray);


