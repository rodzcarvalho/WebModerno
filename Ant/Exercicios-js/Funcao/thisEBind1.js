const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)          
    }
}

pessoa.falar()

// Não apresenta mais, pois a const falar tirou a pessoa.falar de dentro da const pessoa e a saudação está em pessoa.
const falar = pessoa.falar
falar() // conflito entre paradigmas> funcional e OO

//bind ajuda a resolver o this para o objeto correto, nesse caso no Pessoa.
const falarDePessoa = pessoa.falar.bind(pessoa)
