const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas = []
for (i in notas) {
    if (notas[i] <7) {
    notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com calback
notasBaixas2 = notas.filter(function (nota) {
    return nota<7
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Se quiser deixar mais elegante, cria uma constante que seja a função  podes usa em outras partes do programa
const notasMenorQue7 = nota => nota < 7
notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
