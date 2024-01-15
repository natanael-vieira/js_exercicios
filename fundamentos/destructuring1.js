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

const {sobrenome, bemHumorada = true} = pessoa // exemplo caso não tenha este atributo na chave/valor colocar por padrão o valor true faz com que o retorno seja true e não undefined
console.log(sobrenome, bemHumorada)

const { endereco } = pessoa
console.log(endereco)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/*
const { conta: {ag, num} } = pessoa
console.log(ag, num)

Sempre vai dar erro quando tento extrair dados de uma extrutura aninhada que não existe dentro do meu objeto, vai retornar erro, 
diferente de eu tentar extrair de um atributo que não existe, mas que a extrutura existe, neste caso retorna como undefined*/