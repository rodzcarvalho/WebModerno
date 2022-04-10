let numero = 1
console.log('inicio = ', numero)


{
    let numero = 2 //como o let tem escopo de funcionar dentro do bloco, fora será igual inicio
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
