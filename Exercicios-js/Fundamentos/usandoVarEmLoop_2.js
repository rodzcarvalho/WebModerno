const funcs = [] //criei um array

for (var i=0; i<10; i++) {
    funcs.push(function(){
    console.log(i)
    })
}

//todos os elementos do array se tornam 10, pq o ar não tem escopoo de bloco
funcs[2]()
funcs[8]()

