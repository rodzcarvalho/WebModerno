let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log('Os Verdadeiros')
//Colocando !! (not not) ele valida como True essas situações.
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos')
//Colocando !! (not not) ele valida como falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!{})
console.log(!!Infinity)

console.log('Pra finalizar..')
// qd se coloca o ou || com vários itens, ele retorna o primeiro  verdadeiro
console.log(("" || null || 0 || 'teste' || 3))

//para fazer um nvl, por exeplo. Por que o nulo é falso.
let nome = ''
console.log(nome || 'Não preenchido')

nome = 'Rodrigo'
console.log(nome || 'Não preenchido')