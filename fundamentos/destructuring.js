// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 1000
    }
}

//const {nome, idade} = pessoa
//console.log(nome, idade)

const {nome: a, idade: b} = pessoa
console.log(a, b)

//console.log(pessoa.nome, pessoa.idade)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)