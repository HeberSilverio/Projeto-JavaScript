window.alert('Com a nossa mensagem.');
window.confirm("Tem certeza que quer apagar?")
let num1 = prompt('Digite um número')
let num2 = prompt('Digite outro número')
let num3 = window.prompt('Digite mais um número')

let confirma = confirm('Realmente deseja apagar?')

console.log(confirma);
console.log(parseFloat(num1) + parseInt(num2) + Number(num3));
console.log(typeof num1, typeof num2, typeof num3)
console.log( num1,  num2,  num3)
const resultado = parseFloat(num1) + parseInt(num2) + Number(num3);
alert('O resultado foi: ' + resultado)
alert(`O resultado da multiplicação dentro da template string foi: ${num1 * num2 }`) // o mais moderno - Template string
console.log(typeof resultado, resultado)

/*
Método são funções que estão dentro de um objeto!
A função alert() é um metodo porque está dentro do objeto window
*/