// novo recurso do ES6

const pessoa = {
    nome: 'Thais',
    idade: 36,
    endereco: {
        logradouro: 'Rua João de Barro',
        numero: 219
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // exemplo caso não tenha este atributo na chave/valor 
console.log(sobrenome, bemHumorada)

const { endereco } = pessoa
console.log(endereco)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)