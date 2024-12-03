const leia = require('readline-sync')

let n1,n2;

n1 = leia.questionInt("digite o primeiro numero: ")
n2 = leia.questionFloat("digite o primeiro numero: ")

console.log("a variável n1 possui o valor",n1)
console.log("a variável n1 possui o valor",n2)

// = n1 + n2;

console.log("a soma de n1 + n2 é igual a: ", n1 + n2)
console.log("a subtracao de n1 - n2 é igual a: ", n1 - n2)
console.log("a multiplicaçao de n1 * n2 é igual a: ", n1 * n2)
console.log("a divisao de n1 / n2 é igual a: ", n1 / n2)
console.log("a potenciaçao de n1 ^ n2 é igual a: ", Math.pow (n1 , n2))
console.log("a raix quadrada de n1 é igual a: ", Math.sqrt(n1))

