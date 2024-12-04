// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem
//  indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:


// entrada de dados 
const leia = require('readline-sync')
//determine se o numero é par ou impar
let numero = leia.questionInt('digite um numero: ');

if (numero % 2 == 0 && numero < 0){
    console.log(`o ${numero} e par e negativo`)
}else 
if ( numero % 2 == 0 && numero > 0){
    console.log(`o ${numero} e par e positivo`)

}else if(numero % 2 != 0 && numero < 0){
    console.log(`o ${numero} e inpar e negativo`)
}
else if(numero % 2 != 0 && numero > 0){
    console.log(`o ${numero} e inpar e positivo`)

}