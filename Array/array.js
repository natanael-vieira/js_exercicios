console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Thais', 'Abigail', 'Rute')
console.log(aprovados)

aprovados = ['Thais', 'Abigail', 'Rute']
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Natanael'
aprovados.push('Hector')

console.log(aprovados.length)

aprovados[9] = 'Amelie'
aprovados[8] = 'Doroteia'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[7] === undefined)
aprovados.sort() // serve para ordenar os itens, mas altera o array
console.log(aprovados)

delete aprovados[4]
console.log(aprovados)

aprovados = ['Thais', 'Abigail', 'Rute']
aprovados.splice(1, 2, "Abigail e Rute", "Rute e Abigail") // Serve para excluir um índice, incluir um novo item ou fazer os dois ao mesmo tempo
console.log(aprovados)