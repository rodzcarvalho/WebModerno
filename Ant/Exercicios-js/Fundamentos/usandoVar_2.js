// uma variavel criada, pode ser acessada dentro do bloco, mas em funcao não
var numero = 1
console.log('inicio = ', numero)
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)