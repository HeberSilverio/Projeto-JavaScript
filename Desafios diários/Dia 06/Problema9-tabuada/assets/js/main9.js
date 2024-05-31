// PROBLEMA 9
// Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 0 1000.
// Deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente


const output = document.querySelector('#output');
let mensagem = '';
         
      

function mostrarTabuada(){
   // Pedir para o usuário digitar um número
   let n = prompt('Digite um número')
   //Converter o número
   n = parseFloat(n);
   // Criar uma variavel que servirá de índice
   let i = 1;
   let mensagem = '';
   // Enquanto índice <= 1000
   // Concatena na variavel mensagem
   while(i <= 10){
      mensagem += n + ' x ' + i +' = '+ (n*i) + '<br>';
      i++;
   }

   let novaDiv = document.createElement('div');
   // Adiciona a mensagem à nova div
   novaDiv.innerHTML = mensagem;
   // Seleciona a div com id 'output'
   let outputDiv = document.getElementById('output');
   // Adiciona a nova div à div 'output'
   outputDiv.appendChild(novaDiv);
}



function limparTabuada(){
   let mensagem = '';
   output.innerHTML = mensagem;
}






