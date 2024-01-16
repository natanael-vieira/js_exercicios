let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Quando retiramos as chaves, o return se torna implícito

console.log(dobro(35))

let ola = function () {
    return 'Olá'
}

ola = () => {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' /* Neste caso eu posso usar os parênteses ou apenas o underscore, porque como não quero passar nenhum parâmento posso ignorar ele e incluir apenas o underscore, 
mesmo sendo ignorado ele acaba sendo um parâmetro, pois o JS ignora */