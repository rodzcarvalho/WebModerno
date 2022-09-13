//armazenando uma funcao em uma variavel

const  imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma função arros em uma variavel

const soma =(a,b) =>{
    return a + b
}

console.log(soma(4,3))

//Arrow com retorno implicito
const subtracao = (a,b) => a - b

console.log(subtracao(10,4))

const imprimir2 = a => console.log(a)

imprimir2(10)
imprimir2("top demais")