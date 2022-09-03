//Array literal
/*JavaScript: literais de matriz
Em Javascript, um literal de matriz é uma lista de expressões, cada uma representando um elemento de matriz, entre colchetes ' [ ] ' . Quando uma matriz é criada usando um literal de matriz, ela é inicializada com os valores especificados como seus elementos e seu comprimento é definido para o número de argumentos especificados. Se nenhum valor for fornecido, ele cria uma matriz vazia com comprimento zero.

Criando um array vazio:

var frutas = [ ];

Criando um array com quatro elementos.

var frutas = ["Laranja", "Maçã", "Banana", "Manga"]

Vírgula em literais de matriz

Não há necessidade de especificar todos os elementos em um literal de matriz. Se colocarmos duas vírgulas em uma linha em qualquer posição em uma matriz, um elemento não especificado será criado nesse local.

O exemplo a seguir cria o array de frutas:

frutas = ["Laranja", , "Manga"]

Esta matriz tem um elemento vazio no meio e dois elementos com valores. (frutas[0] é "Laranja", frutas[1] é definida como indefinida e frutas[2] é "Manga").

Se você incluir uma única vírgula no final dos elementos, a vírgula será ignorada. No exemplo a seguir, o comprimento da matriz é três. Não há frutos[2].

frutas = ["Laranja", "Manga",]

No exemplo a seguir, o comprimento da matriz é quatro e as frutas[0] e frutas[2] são indefinidas.

frutas = [ , 'Maçã', , 'Laranja'];
*/

const frutas = ["Laranja", "Manga"] // Array literal
const nomes = new Array('Eduardo', 'Maria', 'Joana'); // Construtor de array