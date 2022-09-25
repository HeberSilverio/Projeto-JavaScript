// PROBLEMA 2
// Pedir para o jogador1 digitar um número e jogador2 digitar outros número. Se forem iguais mostrar a mensagem "Empate".
//Sortear um número entre 0 e 1
// Se o número sorteado for 0, ganha quem escolher o numero menor
// se o número sorteado for 1, ganha quem escolher o número maior

let n1 = prompt('Jogador 1 digite um número');

//converter em número inteiro
n1 = parseInt(n1);

//pedir para o usuário digitar outro número
let n2 = prompt('Jogador 2 digite um número');

//converter em número inteiro
n2 = parseInt(n2);

//Se forem iguais mostrar a mensagem "Empate".
if(n1 === n2){
   alert("Vocês empataram!")
} else {

   //Sortear um número entre 0 e 1
   let sorteio = parseInt(Math.random() * 2);
   //mostrar o número sorteado
   alert(`O número sorteado foi: ${sorteio}`);

   // Se o número sorteado for 0, ganha quem escolher o numero menor
   if(sorteio === 0){

      if(n1 < n2) {
         alert("Parabéns! O seu número foi menor. Ganhou o jogador 1")
      }else {
         alert("Parabéns! O seu número foi menor. Ganhou o jogador 2")
      }

      // se o número sorteado for 1, ganha quem escolher o número maior
   }else{
      if(n1 > n2){
         alert("Parabéns! O seu número foi maior. Ganhou o jogador 1")
      } else{
         alert("Parabéns! O seu número foi maior. Ganhou o jogador 2")
         
      }
   }
   
}







alert(`O Jogador1 escolheu ${n1}, O Jogador1 escolheu ${n2}, O numero sorteado foi: ${sorteio}`)
// const exibeBoolean = document.querySelector('.comparacao');
// exibeBoolean.innerHTML += `<p>A média: ${resultadoMedia} é maior do que o número 5? Resposta: ${texteBoolean}. </p>`

// console.log(typeof(texteBoolean));