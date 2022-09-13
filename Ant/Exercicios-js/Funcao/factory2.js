// Factory

function criarProduto(nome, preco) {
    return {
        nome, // nome e produto não preciso colocar nome: nome pq o parametro é o mesmo nome do tag
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3499.99))
console.log(criarProduto('Celular', 2999.99))