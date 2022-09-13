function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+ imposto)}`
}

const produto = {
    nome: 'Celular',
    preco: 3099.90,
    desc: 0.15,
    getPreco // estou passando uma função dentro de um objeto
}
global.preco=20000
global.desc =0.10
console.log(produto.getPreco())

const carro = {preco: 50000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//A diferença entre call e apply é a passagen de paramentos
console.log(getPreco.call(carro, 0.17, '$')) // com call eu passo os parametros dentro do call os mesmos que serão passados pro getPreco
console.log(getPreco.apply(global, [0.17,'$'])) // com apply eu passo os parametros dentro de um array, primeiro parametro é o objeto de contexto da execução, e os parametros passo dentro de um array