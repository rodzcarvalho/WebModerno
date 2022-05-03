/*
* Nesse caso aqui, ao rodar a classe no console e depois executar o falar, ele
* não encontra o nome, pq precisa instanciar o nome
*/
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Rodrigo')
p1.falar()

/*
* Nesse caso aqui, ao rodar a factory no console e depois executar o falar, ele
* encontra o nome construido (industrializado rs)
*/
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 =criarPessoa('Poliana')
p2.falar()