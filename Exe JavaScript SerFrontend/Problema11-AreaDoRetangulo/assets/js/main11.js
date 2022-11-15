// PROBLEMA 11
// Area do retângulo



try {
 

let largura = parseFloat(prompt('Digite a base'));
let altura = parseFloat(prompt('Digite a altura'));

} catch (error) {
   alert('Digite números')
}

function areaDoRetangulo(b, h){

   
   // if (b === undefined || h === undefined){
   //    throw new Error('Area precisa de números')
   // }
   // if(isNaN(b) || isNaN(h)){
   //    throw new Error('Apenas números')
   // }
   
   const area = b * h;

   const output = document.querySelector('#output');
   // Mostra mensagem no output
   output.innerHTML = 'Área total: ' + area;
}


let pessoas = new Array();
