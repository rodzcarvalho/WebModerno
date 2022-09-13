function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.3, 2.5, 4.8))
console.log(soma(1.3, 2.5, ' teste')) // soma os numeros e concatena a string
console.log(soma('a', 'b', 'c')) // concatena o soma=0 com as strings