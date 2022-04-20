const notas = [6.5, 7.8, 9.5, 4.7, 8.1, 7.4]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Poliana',
    sobrenome: 'Carvalho',
    idade: 41,
    peso: 75
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}