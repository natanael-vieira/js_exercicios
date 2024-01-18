class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Programador') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Eu extends Pai {
    constructor () {
        super('Vieira')
    }
}

const filho = new Eu
console.log(filho)
