function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(3)) // só com um parametro retorna Not a Number
console.log(area()) // Vazio tb retorna NaN
console.log(area(3, 2, 4, 14, 4)) // Pode passar mais parâmentros, mas ele só pega os 2 primeiros
console.log(area(4,6))