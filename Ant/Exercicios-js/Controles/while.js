// While é focado em repetições qd tem uma quantidade indeterminada de vezes.

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 // se colocar valor -1, ele nem executa a sentença do While.

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi  ${opcao}.` )
}

console.log('Terminou!')