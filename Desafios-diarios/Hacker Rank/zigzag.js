function processData(input) {
   // Ler e processar os dados de entrada
   const lines = input.split('\n');
   const t = parseInt(lines[0]); // Número de casos de teste
   let result = [];
   
   for (let i = 0; i < t; i++) {
       const n = parseInt(lines[i * 2 + 1]); // Tamanho do array
       const arr = lines[i * 2 + 2]
           .split(' ')
           .map(Number)
           .sort((a, b) => a - b); // Ordenar o array para garantir menor sequência lexicográfica

       // Etapa 1: Identificar o meio
       const mid = Math.floor((n - 1) / 2);

       // Etapa 2: Trocar o elemento do meio com o último elemento
       [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];

       // Etapa 3: Reverter a segunda metade
       const secondHalf = arr.slice(mid + 1).reverse();

       // Combinar as duas partes
       const zigZag = [...arr.slice(0, mid + 1), ...secondHalf];
       result.push(zigZag.join(' '));
   }

   console.log(result.join('\n'));
}
