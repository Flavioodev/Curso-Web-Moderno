const prod1 = {};
prod1.nome = "Poltrona";
prod1.preco= 500.45;
prod1["desconto"] = 0.40;
console.log(prod1);

const prod2 = {
    nome: "Poltrona2",
    preco: 365.90,
    obj3:{
        exemploChave: "elemento do objeto 3.1"
        
    }
  //obj3:{                                  
  //    exemploChave: "elemento objeto 3.3"
  //    criar chaves de mesmo nome E dentro do mesmo escopo, faz com que só a último chave seja lida. Logo não se deve fazer isso  
    ,
    obj4:{
        obj4:{
            demontração: "obj4 é uma chave única dentro do escopo da chave obj4 acima."
        }
    }
}



console.log(prod2);

const a = {nome: "Flávio"};

a.nome = "William";

console.log(a)



