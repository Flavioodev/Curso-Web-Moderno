{
    var teste1 = "Será que dá pra imprimir essa var fora desse bloco?"
}

console.log(teste1);//sim, é possível. dá pra acessar 'var' de todos os escopos com exceção do escopo de uma function

function imprimir(){
    var teste2 = "Testando o escopo de var"
}
//console.log(teste2);Erro! Não é possível acessar 'var' no escopo de uma function 


if(true){
    var teste3 = "dá para acessar uma var no escopo de um if?"
}
console.log(teste3);//dá, sim.


var testeBloco = "Quando a mesma var está em blocos diferentes"
{
    var testeBloco = "\nO console.log() fora desse bloco imprimirá a primeira ou a segunda var?"
}
console.log(testeBloco);//a segunda, pois o bloco não fez diferença nenhuma


for (var i = 0; i < 3; i++) {
    console.log("\nÉ possível imprimir i fora desse bloco?")
}
console.log("i =",i);//SIM, com var é possível

//escopos de var: global e function