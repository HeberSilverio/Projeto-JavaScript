// PROBLEMA 11
// Area do retângulo




let largura = parseFloat(prompt('Digite a base'));
let altura = parseFloat(prompt('Digite a altura'));



function areaDoRetangulo(b, h){
   const area = b * h;

   const output = document.querySelector('#output');
   // Mostra mensagem no output
   output.innerHTML = 'Área total: ' + area;
}
