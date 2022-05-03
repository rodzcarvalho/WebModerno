//pegar a classe abaixo e transformar em uma função construtora
class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa1('Rodrigo')
p1.falar()

//resultado
function Pessoa(nome) {
    this.nome = nome 
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
 
}

const p2 =Pessoa('Poliana')
p2.falar()