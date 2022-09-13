const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 3.6

console.log (peso1,peso2)

//validar se é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso3))

 const avaliacao1 = 9.871
 const avaliacao2 = 6.871

 const total = avaliacao1 * peso1 + avaliacao2 * peso2
 const media = total / (peso1 + peso2)

 console.log(media)
 //Para arredondar, usa o .toFixed com o numero de casas decimais
 console.log(media.toFixed(2))

  //para mudar para string, usar o .toString
  console.log(media.toString)

  //para transformar em binario, usar o .toString(2)
  console.log(media.toString(2))

  console.log(typeof media)
