let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // mesmo forçando a mudança de contexto com o bind, a arrowFunction não muda o this, ele mantém a this associado ao local em que a função foi definida
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
