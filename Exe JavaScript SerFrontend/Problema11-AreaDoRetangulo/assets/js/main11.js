// PROBLEMA 11
// Area do retângulo

document.getElementById('calcular').addEventListener('click', function() {
   let largura, altura;

   try {
       largura = parseFloat(document.getElementById('base').value);
       altura = parseFloat(document.getElementById('altura').value);
   } catch (error) {
       alert('Digite números');
   }

   // Restante do seu código...
   function areaDoRetangulo(b, h){
      const area = b * h;
   
      const output = document.querySelector('#output');
      const resultadoDiv = document.createElement('div');
      resultadoDiv.innerHTML = 'Área total: ' + area;
      output.appendChild(resultadoDiv);2
   
      // Desenhar o retângulo
      output.style.width = ((b * 5 ) + 100) + "px";
      output.style.height = ((h * 5) + 100) + "px";
      output.style.padding = "8px";10
   }
   
   // Chamar a função com a largura e altura
   areaDoRetangulo(largura, altura);
});

