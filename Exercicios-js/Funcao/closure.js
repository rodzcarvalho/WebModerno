// Closure é o escopo criado quando uma função é declara
// Esse escopo permite a função acessar e manipular variaveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local' // como x foi declarado aqui dentro, ele retorna o valor Local
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())