const quaseArray = { 0 : 'Thais', 1 : 'Abigail', 2 : 'Rute' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Thais', 'Abigail', 'Rute']
console.log(quaseArray.toString(), meuArray)