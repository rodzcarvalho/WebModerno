let valor //criamos uma variavel e não definimos, não atribuimos  nada pra ela receber, ele fica "indefinica"
console.log(valor)

//no caso do null, ele gera uma reserva na memoria
valor=null
console.log(valor)
//console.log(valor.toString) //da erro

/*
* Quando uma variavel é objeto, ela referencia um endereço da memória,
* então se atribuir outra variavel a ela, as duas farão referencia ao mesmo endereço.
* se alterar algo na segunda variavel, altera nas duas, pois a alteração foi no 
* endereço de memoória referenciado.
* isso não acontece nos tipos básicos (number, string)
*/

const a ={texto: 'Olá mundo'}
console.log(a)

const b = a
b.nome = 'Mundo bonito'
console.log(a) //foi alterado o valor do a, pois a alteração foi na memória.
console.log(b)
console.log('----------')

const produto = {}
console.log(produto.preco) //qd tento acessar um atributo que ainda não existe no objeto, diz que é undefined
console.log(produto)

produto.preco = 3.79
console.log(produto)

produto.preco = undefined //evitar fazer isso, se quiser zerar uma variavel, deixa null. Deixa pra linguagem definir undefined 
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco //se quiser apagar dados do objeto, usa delete
console.log(produto)

produto.preco = null //deixar sem preço
console.log(!!produto.preco)
console.log(produto)