//Qualquer numero dividido por 0, não gera erro, gera infinito
console.log(7/0)

//Se tiver uma string que possa ser convertida em numero, ele faz a conversão
console.log("10" / 2) //o que resulta em 102 e não 12 pq o + existe na string
console.log("show" * 2)
console.log('10' - 2)
//Porem quando começa com uma string com soma (+), a preferencia é strig
console.log("10" + 2)

//JS tem problema com decimais nesse calculo a baixo por ex.
console.log(0.1 + 0.7)

//Não consegue usar o numero literal direto, tem que colocar entre parenteses
//console.log(10.toString())
console.log((10.12548).toFixed(3))