const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um novo elemento ao array
console.log(pilotos)

pilotos.shift() // removo o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // retorna um novo array gerado a partir deste método 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // quando passado o último índice, sempre será excluído do array
console.log(algunsPilotos2)