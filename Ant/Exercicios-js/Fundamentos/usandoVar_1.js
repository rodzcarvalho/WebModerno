{
    {
        {
            { 
                var sera = 'Será ????'
                console.log(sera)
            }
        }
    }
}

// a variavel var, fica visivel pra todos, mesmo fora do bloco, em outra linguagens so é visivel dentro do bloco
console.log(sera)

//quando define uma variavel dentro de um bloco da função, ela ta disponivel so dentro daquela função.
function teste () {
    var local = 123
}

teste()
//console.log(local) //erro