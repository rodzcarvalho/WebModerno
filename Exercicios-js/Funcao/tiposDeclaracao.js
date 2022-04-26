console.log(soma(3,4)) // Retorna valor, pois a function ja ta carregada
//console.log(sub(3,4)) // gera erro pq neste tipo de declaração, ainda não está carregada
// so pode ser carregada após a linha que ela é criada

// function declaration
// Se chamar ela antes da linha da função, ela ja funciona, pq o interpretador já carrega todas as functions declaradas desta forma
// muito usada
function soma(x,y) {
    return  x + y
}

// function expression (uma função anonima colocada numa const)
// só consegu usar a função desta forma se chamar depois da linha de criação da mesma
// uso moderado
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,4))

// named function expression
// só consegu usar a função desta forma se chamar depois da linha de criação da mesma
//muito pouco usado
const mult = function mult (x,y) {
    return x * y
}

console.log(mult(3,4))