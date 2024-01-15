const [a] = [10] /* Quando vou criar ou definir um array destructuring, eu uso o colchete logo após a palavra reservada, neste caso a const.
Caso eu vá utilizar as informações a partir de um array já pronto eu uso colchetes depois da palavra reservada: const {a}  */
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)