//Do While é uma variação, caso a opção for -1 ele executa pelo menos 1 vez

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi  ${opcao}.` )
} while (opcao != -1) // é a única cuja a expressão está após o bloco

console.log('Terminou!')

/*
Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
let opcao //somente iniciada a variável, sem valor inicial!
 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
 
console.log('Até a próxima!')
Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.
*/