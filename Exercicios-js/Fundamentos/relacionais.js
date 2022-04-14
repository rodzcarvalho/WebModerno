console.log('01- ', '1' == 1) // sinal de igual, ele não verifica se o tipo é diferente
console.log('02- ', '1' === 1) // estritamente diferente, leva em consideração o tipo, por isso da false
console.log('03- ', '3' != 1)
console.log('03- ', '3' !== 1)

console.log('05- ', 3 < 2)
console.log('06- ', 3 < 2)
console.log('07- ', 3 <= 2)
console.log('08- ', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
// os dois vão dar falso, pois como foi instanciado, ele esta comparando enderço de memoria e não valores da variavel
console.log('09- ', d1 == d2)
console.log('10- ', d1 === d2)
console.log('11- ', d1.getTime() === d2.getTime()) //qd uso o .getTime(), eles ficam com mesmo tipo e valor, ai se compara valores e não memória

console.log('12- ', undefined == null)
console.log('12- ', undefined === null)
