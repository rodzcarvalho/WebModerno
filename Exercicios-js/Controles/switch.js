/* Switch não é relacional, ous eja, não ve se é true ou false para entrar na setença
 * Caso use o default em outra posição, precisa usar o break, mas se colocar no final, não precisa do break
*/

const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // É necessário colocar o break, para que ele saia nessa consição caso seja verdadeiro, do contrário ele iria executar todas as expressões abaixo,
        case 8: case 7: // É colocado assim, pois se achar o case 8, a sentença tá vazia e não tem break, ele cai pro de baixo e executa a setença e sai devido ao break
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}
imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(5.35)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)