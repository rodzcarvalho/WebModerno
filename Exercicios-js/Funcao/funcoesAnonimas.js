// função anonima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function (x, y) {
    return x - y
})
imprimirResultado(3,4, (x, y) => x * y) // essa arrow function não pode tirar os parenteses dos parametros, pois são mais de 1

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()