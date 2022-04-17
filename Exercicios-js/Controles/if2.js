function teste1(num) {
    if(num >= 7) // não foi aberto bloco aqui, então ele entende que o if retorna só a primeira ação posterior
        console.log(num) // dentro do IF retorna só essa
        console.log('Final') //essa sempre sera executada, pois esta fora do if
}

teste1(6)
teste1(8)

// No caso a baixo, o ; e uma setença vazia, então o if termina ali, o que vem depois ja está fora do if, ou seja, imprimir de qualquer forma

function teste2(num) {
    if(num >= 7); {  //cuidado com o ;, não usar com as estruturas de controle
        console.log(num) 
    }
}

teste2(6)
teste2(8)