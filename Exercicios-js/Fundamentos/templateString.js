const nome = 'Rebeca'
const concatenação = 'Olá ' + nome +' !' 

//TemplateString seria uma forma de concatenar, com formatações, ele pega o simbolo da crase
const template = `
   Olá
   ${nome} !`

console.log(concatenação)
console.log(template)

//serve pra criar expressões mais rapidamente.
console.log(`1 +1 = ${1+1}`)

//também pode ser usado com funções
//criando uma função que deixa o texto maiusculo
const up = texto => texto.toUpperCase()
console.log(`Ei, ${nome} ${up('cuidado !')}`)