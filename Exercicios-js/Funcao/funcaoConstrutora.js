/*As funções construtoras em JavaScript são como as classes do Java, 
* diferenciando apenas pela sintaxe. 
* Em questão de funcionamento, tanto funções contrutoras no JavaScript 
* quanto Classes no Java têm a mesma utilidade: servir de molde para a 
* criação de objetos.
*/
function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado, com o let, pois só pode ser acessado dentro da function, var deixa acessar de fora o que deixa menos seguro
    let velocidadeAtual = 0

    //metodo publico: o this deis o metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico para não acessarem velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)