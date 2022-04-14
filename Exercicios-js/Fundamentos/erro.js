function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //try é um bloco que potencialmente pode gerar algum tipo de erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { // catch vc pode pegar o erro, tratar o erro
        tratarErroELancar(e)
    } finally { //finally sempre será executado dando erro ou tudo certo
        console.log('Finalizado')
    }
   
}

const obj={ nome: 'Roberto'}
imprimirNomeGritado(obj)