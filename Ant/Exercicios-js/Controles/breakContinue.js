/*
 * Break e Continue causam desvio de fluxo, principalmente em for e while.
 * Break: Sai do laço corrente
 * Continue: interrompe a repetição corrente e vai pra próxima repetição
*/

const nums  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Break ele para totalmente a execução
for(let x in nums) {
    if (x == 5) {
        break //break não atua no if, apenas no for ou while
    }
    console.log(`X ${x} = ${nums[x]}`)
}

//Continue interrompe apenas aquela condição e continua na próxima
for(let y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`Y ${y} = ${nums[y]}`)  
}

//Quando tiver um for dentro de outro, é necessário usar rótulo
//NÃO USAR ESSE EXEMPLO
externo: for (let a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = ${a},${b}`)
    }
}