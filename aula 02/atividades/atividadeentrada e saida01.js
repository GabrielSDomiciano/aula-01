const leia = require('readline-sync')

let salario,abono,novoSalario;

salario = leia.questionFloat("digite o salario: ");
abono = leia.questionFloat("digite o abono: ");

novoSalario = salario + abono; 
console.log("seu novo salario é; ",novoSalario);



