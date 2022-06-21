proposicao = true;

//valores que iniciam verdadeiros
console.log(!!proposicao);// o caracter ! significa negação. Usado duas vezes é dupla negação, resultando true
console.log(!!5);
console.log(!!Infinity);
console.log(!![])//array
console.log(!!{});//objeto
console.log(!!" ")//um espaço

console.log("Falsos: ");

//VALORES QUE INICIAM EM FALSE
console.log(!!"");//uma string vazia inicia como false. Com a dupla negação resulta em false também
console.log(!!0);
console.log(!!null);
console.log(!!undefined);

//usando o operador relacional ||  , que significa OU
console.log(('' || null || undefined));//ele retornará o valor que for true, se houver


//aplicação do OU ||
let num = 0;// a variável nome tem o valor 0; ao usar o ||, o zero é reconhecido como false; então o || escolhe a string 'desconhecido', que é true

console.log(num || "desconhecido");

