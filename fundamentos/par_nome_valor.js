const saudacao = 'Opa' // escopo 1

function exec() {
    const saudacao = 'Faaaaaaala' // escopo 2
    return saudacao
}
// Tendo o mesmo nome as const, como estão em escopos diferentes não irão dar conflito

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Natanael',
    idade: 36,
    peso: 78,
    endereco: {
        logradouro: 'Rua João de Barro',
        numero: 219
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
