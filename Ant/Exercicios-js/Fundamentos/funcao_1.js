//função sem retorno: a, b são valores de entrada.
function imprimirSoma(a, b) {

    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,5,6,8,2,1.7) // so pega os dois primeiros, pois são as duas variaveis definidas


//funcao com retorno: foi definido valor padrão 1 pro b
function soma (a,b = 1) {
    return a + b
}

console.log(soma (5,6))
console.log(soma (2))
console.log(soma ()) //fica not a number NaN pq não foi j formado valor padrão pra a
