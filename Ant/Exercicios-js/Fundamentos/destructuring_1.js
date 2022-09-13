// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 28,
    endereco: {
        rua: 'Rua tal',
        numero: 1020
    }
}
//destructuring é como retirar atributos de um objeto e poder usar como variaveis
const {nome, idade} = pessoa
console.log(nome, idade)

//essa forma abaixo seria renomeando as variaveis
const {nome: n, idade: i} = pessoa
console.log(n, i)

//qd tento pegar atributos inexistentes (posso passar um valor padrão como no caso de humor)
const { sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

//quando tenho atributos dentro do bloco do bloco
const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//quando acesso bloco dentro de bloco, só o ultimo nivel pode estar null ou undefined, nesse caso  conta tem que existir
const { conta: {ag, num}} = pessoa
console.log(ag, num) // erro