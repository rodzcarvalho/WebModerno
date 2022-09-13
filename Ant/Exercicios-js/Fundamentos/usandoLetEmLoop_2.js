const funcs = [] //criei um array

for (let i=0; i<10; i++) {
    funcs.push(function(){
    console.log(i)
    })
}

//let tem escopo de bloco, então lembra qual o valor de cada elemento do array
funcs[2]()
funcs[8]()

