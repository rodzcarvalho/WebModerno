function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    //}, 1000)  // nesse caso o this.idade++ não aponta pra function Pessoa, pois o que está chamando é o setInterval
    }.bind(this), 1000)    
}

new Pessoa

// Outra forma usando o self, ou seja, criando uma constante que leva o this.
function Pessoa2() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000) 
    
}

new Pessoa2