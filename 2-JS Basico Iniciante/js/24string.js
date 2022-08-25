let umaString = " Um \"texto\""; // para escapar o caracter
let segundaString = " Um \texto"; // uma barra invertida anula o caracter seguinte
let terceiraString = " Um \\texto"; // duas barras invertidas para aparecer uma barra.
console.log(umaString);
console.log(segundaString);
console.log(terceiraString);

// String são indexadas porque são iteraveis.
// String tem um índice de posição dos caracteres. E inicia em 0
console.log(umaString[5]);
console.log(umaString.charAt(6)); //Função que exibe o caracter correspondente daquela posição solicitada
// TRÊS FORMAS DE CONCATENAÇÃO
console.log(umaString.concat(' para', ' um', ' lindo dia.')); //Função concatena
console.log(umaString + ' lindo, em um dia lindo.'); //+ concatena
console.log(`${umaString} em um lindo dia.`); //concatena com template string
console.log(umaString.indexOf('texto')); //A palavra texto começa no índice 5
console.log(umaString.lastIndexOf('e')); //Procura no índice de trás pra frente
console.log(umaString.match(/[a-z]/g)); // Expressão regular - encontra todos as letras minúsculas
console.log(umaString.search(/x/)); // Encontra o índice 
console.log(umaString.replace('Um', 'Dois')); // replace substitui uma palavra por outra

let frase = 'O rato roeu a roupa do rei de roma.';
console.log(frase.replace(/r/g, 'p')); // substitui um caracter por outro
console.log(frase.length); // tamanho da string
console.log(frase.slice(-5)); // trecho da string ou fatiamento
console.log(frase.split('r')); // divide
console.log(frase.toUpperCase()); // divide
console.log(frase.toLowerCase()); // divide
console.log(frase.toLocaleUpperCase()); // divide