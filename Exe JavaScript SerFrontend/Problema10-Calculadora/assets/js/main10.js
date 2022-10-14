// PROBLEMA 10
// Fazer uma calculadora


let mensagem = '';

let n1 = parseFloat(prompt('Digite um número'));



function escreve(){
   const output = document.querySelector('#output');
   // Mostra mensagem no output
   output.innerHTML = n1;
}
escreve();
function somar(){
   let n = parseFloat(prompt('Digite outro número'));
   n1 += n;
   escreve();
}
function subtrair(){
   let n = parseFloat(prompt('Digite outro número'));
   n1 -= n;
   escreve();
}
function multiplicar(){
   let n = parseFloat(prompt('Digite outro número'));
   n1 *= n;
   escreve();
}
function dividir(){
   let n = parseFloat(prompt('Digite outro número'));
   n1 /= n;
   escreve();
}



function limparTabuada(){
   let mensagem = '';
   output.innerHTML = mensagem;
}

// let i = 1;
//       // Enquanto índice <= 1000
//       // Concatena na variavel mensagem
//    while(i <= 10){
//       mensagem += n + ' x ' + i +' = '+ (n*i) + '<br>';
//       i++;
//    }




