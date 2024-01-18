const soma = function (x, y) {
    return x+ y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(7, 9)
imprimirResultado(7, 9, soma)
imprimirResultado(7, 9, function (x, y) {
    return x - y
})
imprimirResultado(7, 9, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('E aí?!')
    }
}

pessoa.falar()