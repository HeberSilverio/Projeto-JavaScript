// string são indexadas por caracteres
//            01234
const nome = 'Héber'
//para acessar uma letra da string pelo índice
// console.log(nome[0]); // exibe o elemento da posição zero do índice

// o Array é indexada por elementos
const alunos = ['luiz', 'Maria', 'João'];
// console.log(alunos);
// console.log(alunos[0]); //Exibe o elemento da posição zero do array
alunos[0] = 'Luiz Filho'; //Desta forma altera o elemento da posição zero
alunos[3] = 'Luiza'; //Acrescenta um elemento para a posição três que ainda não existia - só que num array grande eu saberia qual é o último elemento?
// console.log(alunos.length); //qual o tamanho do meu array
alunos[alunos.length] = 'Jales'; //acrescenta no final
alunos[alunos.length] = 'Rogério'; //acrescenta no final
alunos.push('Otávio'); //Essa função adicina no final do array
alunos.push('Lucélio'); //Essa função adicina no final do array
alunos.unshift('Evânio'); //Adiciona um elemento na primeira posição do array
// alunos.pop(); //Remove o último elemento do array
// alunos.shift(); //Remove o PRIMEIRO elemento do array

// const removido = alunos.pop(); //adiciona na variável o elemento removido
// delete alunos[1]; // apaga o elemento e o índice, e fica o espaço vazio
// console.log(alunos.slice(0, 3)); // Exibe os elementos da posição zero até a 2 porque a última não entra.
// console.log(alunos.slice(0, -1)); // Exibe os elementos da posição zero e exclui o último
console.log(typeof alunos); // Array é um object
console.log(alunos instanceof Array); // Alunos é uma instância de array