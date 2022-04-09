const escola = "Cod3r"

//charAt pega a posição de uma letra, começando do 0
console.log(escola.charAt(4))
//PEgando indice inexistente, não da erro. imprime em branco.
console.log(escola.charAt(5))

//charCodeAt para retornar o unicode
console.log(escola.charCodeAt(3))

//Retornar o indice de uma determinada letra usa o .indexOf
console.log(escola.indexOf('r'))

//para extrair parte do texto usa o .substring
//No caso abaixo começa do indice 1 e tras todo o restante
console.log(escola.substring(1))

//No caso abaixo informo o primeiro e o ultimo indice, porém não apresenta o ultimo
console.log(escola.substring(0,3))

//Concatenar pode usar o .concat
console.log("Escola ".concat(escola).concat('!'))
console.log("Escola " + escola +'!')

//Uso do replace, onde informo um caracter e por qual deve ser substituido
console.log(escola.replace('o','e'))
console.log(escola.replace(3,'e'))

//Para criar um array por ex, uso o .split indicando qual o item que será o separado
console.log('Ana, Rodrigo, Poli, Maria'.split(','))
console.log('Ana, Rodrigo, Poli, Maria'.replace(' ','').split(','))
console.log('Ana, Rodrigo, Poli, Maria'.split(' '))