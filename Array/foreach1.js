const aprovados = ['Thais', 'Abigail', 'Rute', 'Natanael']

aprovados.forEach(function(nome, indice/*, array*/) {
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(`O(a) aluno(a) ${aprovado} foi aprovado(a) no ENEM!`)
aprovados.forEach(exibirAprovados)