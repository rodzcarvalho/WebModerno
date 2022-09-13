const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

console.log(valores[4] || 'Indice sem valor')

//posso adicinar um indice
valores[4]=10
console.log(valores)

//posso adicionar um indice la na frente, porem o intervalo fica com dados vazios
valores[7]=20
console.log(valores)

//para contar quantos elementos tem o array, usa o .length
console.log(valores.length)

//função para adicionar usa o push e ele deixa misturar tipo de dados num mesmo arrya
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//o .pop retira e mostra o ultimo item do array
console.log(valores.pop())

//Usa-se o delete para tirar valores de um indice
delete valores[2]
console.log(valores)

console.log(typeof valores)
