const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

/*
* esse função abaixo, apesar de ter uma const valor, vai imprimir Global, pois ele chama a função de cima
* A função carrega consigo o contexto no qual ela foi declarada, ou seja, leva em consideração também o local de declaração
* Por isso ao chamar o exec() a minhafuncao() vai chamar o valor global
*/
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()