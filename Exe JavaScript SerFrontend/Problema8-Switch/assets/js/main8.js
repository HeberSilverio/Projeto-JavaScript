/*
   Problema 8
   Pedir para o usuário digitar um número de 1 a 4. 
   Mostrar na tela uma mensagem diferente para cada número
   */


let n = prompt('Digite um número entre 1 e 10');

//converter em número inteiro
n = parseInt(n);

// //pedir para o usuário digitar outro número
// let n2 = prompt('Digite outro número');

// //converter em número inteiro
// n2 = parseInt(n2);

switch(n){
   case 1:
      alert('Um é pouco');
      break;
   case 2:
      alert('dois é bom');
      break;
   case 3:
      alert('tres será que é demais?');
      break;
   case 4:
      alert('Será que é exagero?');
      break;
   case 5:
      alert('Cinco é um número legal');
      break;
   case 6:
      alert('Seis é um número da sorte');
      break;
   case 7:
      alert('Sete é um número mágico');
      break;
   case 8:
      alert('Oito é um número poderoso');
      break;
   case 9:
      alert('Nove é um número especial');
      break;
   case 10:
      alert('Dez é um número perfeito');
      break;
}10

