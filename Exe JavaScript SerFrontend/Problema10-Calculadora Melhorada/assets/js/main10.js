// PROBLEMA 10
// Fazer uma calculadora
try{



let mensagem = '';

let n1 = parseFloat(prompt('Digite um número grandea'));




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

let n2 = n1;
function escreveCalcula(){
   const output = document.querySelector('#calcula');
   // Mostra mensagem no output
   calcula.innerHTML = n2;
}
escreveCalcula();

function calcular(simbolo) {
   let n = parseFloat(prompt('Digite outro número'));

   switch(simbolo){
      case '+':
         n2 += (n);
         break; 

      case '-':
         n2 -= (n);
         break;
      case '*':
         n2 *= (n);
         break;
      case '/':
         n2 /= (n);
   };
   escreveCalcula();
}

} catch(e){
   console.log(e);
}


