let contador = 1

while(contador <=10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for(let i = 1; i <=10; i++) {
    console.log(`i = ${i}`) 
}

const notas = [6.5, 7.8, 9.5, 4.7, 8.1, 7.4]
for(let i = 0; i < notas.length; i++) { //deixando a variavel sem o let, vc conseque acessar ela após a execução. Colocando o let, acessa só dentro do for
    console.log(`nota = ${notas[i]}`)
}