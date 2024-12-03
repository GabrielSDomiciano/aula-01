const leia  = require("readline-sync")// biblioteca espcifica para colocar valores
// criar as variaveis
let n1,n2,n3
//atribuir valor as variaveis
n1 = leia.questionInt("digite o numero")
n2 = leia.questionInt("digite o numero")
n3 = leia.questionInt("digite o numero")


// console serve sempre para exibir menssagen
console.log("o valor digitado foi: ",n1)
console.log("o valor digitado foi: ",n2)
console.log("o valor digitado foi: ",n3)

// realiza contas com as variaveis inseridas
console.log("a soma de n1 n2 n3 é :",n1+n2+n3)
console.log("a divisao de n1 n2 n3 é :",n1/n2/n3)
console.log("a subtraçao de n1 n2 n3 é :",n1-n2-n3)
console.log("a multiplicaçao de n1 n2 n3 é :",n1*n2*n3)
console.log("a pontecialiçao de n1 n2 n3: é ",Math.pow(n1,n2))
console.log("a raiz quadrada de n1 n2: é ",Math.sqrt(n1,n2))