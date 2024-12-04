const leia = require('readline-sync')

const a = leia.questionInt('digite numero a: ');
const b = leia.questionInt('digite numero b: ');
const c = leia.questionInt('digite numero c: ');
const soma = a + b;

if(soma >c){
    console.log("A soma de A + b é maior que c")
}else if(soma < c){
    console.log("A soma de A + B é menordo que c")
}else(soma == c);{
    console.log("A soma de A + B é igual a C")
}
