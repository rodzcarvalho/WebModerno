//Objeto em JS é uma atribuição de Chave : Valor, é diferente de json
//Ele é representado por {}
const prod1 = {}

//Adicionando chaves
prod1.nome = "Celular xpto"
prod1.preco = 5987.99
//pode adicionar chaves com espaco
prod1['Desconto Legal'] = 0.40 //evite usar atributos com espaço.

console.log(prod1)

//posso criar o objeto ja com os atributos (chaves)

const prod2 = {
nome: 'Camisa Polo',
preco: 79.90,
    especificacoes: { //exemplo de objeto dentro de objeto
        tecido: "algodão",
        tamanhos: ['P','M','G']
    }
}

console.log(prod2)

//no Json, os atributos são definicos por aspas duplas
'{ "nome": "Camisa Polo", "preco": 79.90, "especificacoes": { "tecido": "algodão","tamanhos": ["P","M","G"]}}'

