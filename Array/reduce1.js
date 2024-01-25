const alunos = [
    { nome: 'Thais', nota: 8.3, bolsista: false },
    { nome: 'Natanael', nota: 7.2, bolsista: true },
    { nome: 'Abigail', nota: 9.2, bolsista: false },
    { nome: 'Rute', nota: 8.7, bolsista: false }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)