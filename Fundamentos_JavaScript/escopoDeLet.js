let string = "valor de fora";
{
    let string = "valor de dentro do bloco. Qual valor será impresso?";
}
console.log(string);//o console.log está fora do bloco, logo ele imprime a variável fora do bloco, pq let tem restrição de bloco

if (true){
    let teste1 = "\nDá para imprimir essa variável let fora do if?"
}
//console.log(teste1);// NÃO! ERRO!!!


function Imprimir(){
    let teste2 = "\nDá pra imprimir let fora da function?"
}
//console.log(teste2); NÃO! ERRO!!!


for (let i = 0; i < 3; i++) {
    console.log("\nÉ possível imprimir a let i fora desse bloco?")
}
//console.log("i = ",i); NÃO! ERRO!!! 

//escopos de let: global e de bloco


