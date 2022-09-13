// Função em JS é First-Class Object (Citizens)
// Hight-order function

//Criar de forma literal
function fun1() { }

// Armazenar em uma variavel através de uma função anonima (sem nome)
const fun2 = function() { }

// Armazenar dentro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar dentro de um atributo de um objeto
const obj = {}
obj.falar = function () {return 'Opa !'}
console.log(obj.falar()) //nesse caso te que colocar o () no falar para invocar a função

// Passar função como parâmetro em outra função
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar  / conter uma função

function soma(a, b) {
    return  function(c) {
         console.log(a + b + c)
    }
}

soma(4, 2)(9)
const seteMais = soma(4, 2)
seteMais(9)