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

ola = () => 'Olá' /*Função sem parâmetros, usando apenas os parênteses */
ola = _ => 'Olá' /* Neste caso eu posso usar apenas o underscore como parâmetro, porque como posso ignorar ele no momento da chamada, 
mesmo sendo ignorado ele acaba sendo um parâmetro, pois o JS permite chamar ignorando os parâmetros */
console.log(ola())