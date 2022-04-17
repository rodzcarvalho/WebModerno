const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('Epa') // Por ser string, ele não consegue comparar com o 7 e vai pro Else.