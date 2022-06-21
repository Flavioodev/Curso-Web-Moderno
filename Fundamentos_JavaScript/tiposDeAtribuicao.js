//atribuição por referência/endereço de memória
//essa atribuição vale para, por exemplo, objetos
const a = {name:"Flávio"};
const b = a;//as constantes ficam iguais, compartilhando o mesmo ENDEREÇO de MEMÓRIA

b.name = "William";

console.log(b);
console.log(a);//'b' E 'a' mostram name:william. Pois a mudança da linha 6 foi feita no endereço de memória, compartilhado por ambas as constantes

//outro ponto: apesar de 'a' e 'b' serem constante, eu consigo mudar o valor delas quando elas são objetos
// acho que de 2 a 3 é uma mudança inaceitável para as constantes, mas {name: 'Flávio'} e {name:'William} não por estar mudando mais especificamente o valor. 2 e 3 deve ser uma 
//mudança mais "evidente"