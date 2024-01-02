const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

/* Neste caso se eu armazenar o pessoa.falar dentro de uma variável ocorre um conflito entre paradigmas
funcional e orientado a objetos, porque o this neste caso não será mais o que está dentro de pessoa.falar(), 
mas sim o da variável criada, então entra neste caso o bind onde é criado uma função e dentro de função
existem outras funções então usaremos o bind para resolver o this */

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()