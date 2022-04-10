//par nome/valor
const saudacao = 'Ola' // contexto lexico 1

function exec () {
    const saudacao= 'Falaaa' // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhas de pares nome/valor

const cliente = {
    nome: 'Rodrigo',
    idade: 39,
    peso: 60,
    endereco: {
        rua: 'Rua xpto',
        numero: 123,
        bairro: 'Bairro x'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)