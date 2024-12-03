const leia = require('redline-sync')

// Dados usuario
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isadmin = false
const isgerente = true
const isblock = false

console.log("/n tela de login")

let usuariolongin = leia.question('digite o seu usuario: ')

let senhalogin = leia .question('digite a sua senha',{
     hideEchoback: true,
})