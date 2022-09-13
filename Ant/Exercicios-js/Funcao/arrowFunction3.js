let comparaComThis = function(param) {
    console.log(this === param)
}
//Qd é feito a function normal sem arrow, ele aponta pro global, então é true
comparaComThis(global)

const obj= {}
comparaComThis = comparaComThis.bind(obj)

//neste caso agora aponta para obj e não mais para global, devido ao .bind(obj)
comparaComThis(global)
// aqui da true
comparaComThis(obj)

//quando usa o arrow, é um novo módulo, ou seja, é diferente.
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

comparaComThisArrow(module.exports)

//Mesmo com o bind, não muda o contexto, não vai pro obj.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // da false pq não mudou, arrow precede em cima do bind.
comparaComThisArrow(module.exports) //da true pq continua no arrow.
