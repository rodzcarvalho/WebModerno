let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//pode ser escrito assim quando tem apenas 1 unico parametro, quando tira as chaves tb tem um return implícido
dobro = a => 2 * a

console.log(dobro(5))

let ola = function () {
    return 'Olá'
}

//refatorando para função arrow
ola = () => 'Olá'
console.log(ola()) 