let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //a forma prefixada é mais preferencial do que  a de cima (pos fixada)
console.log(num1)

// resultado true pois o ++ é executado antes da comparação (===) e o -- é depois da comparação
console.log(++num1 === num2--) // fuja dessa situação, não colocar incremento dentro de comparação
console.log(num1 === num2) //agora é false pq o num2-- foi executado 