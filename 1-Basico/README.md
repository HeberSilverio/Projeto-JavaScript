# [JavaScript - Básico](#javascript---básico)

## 📋 Índice

* [Visão Geral](#vis%C3%A3o-geral)
* [Concatenação](#concatena%C3%A7%C3%A3o)
* [Variáveis](#vari%C3%A1veis)
* [Tipos de Dados](#tipos-de-dados)
* [Operadores](#operadores)
* [Estruturas-Condicionais](#estruturas-condicionais)
* [Arrays]()
* [Object]()
* [Escopo]()
* <a href="">Estruturas de Repetição</a> 
* <a href="">Manipulação de strings</a> 
* <a href="">Manipulação de datas</a> 
* [Function]()
* <a href="">Arrow Functions</a> 
* <a href="">Manipulação de arrays</a> 
* [Classes]()
* <a href="">Modificadores de acesso</a> 
* [Encapsulamento]()
* [Static]()
* [Herança]()

* <a href=""></a> 
* []()

### Visão Geral

A JavaScript foi criada em 1995 por Brendan Eich, um engenheiro da Netscape, e lançada pela primeira vez com o Netscape 2 no início de 1996. Foi inicialmente chamada de LiveScript, mas logo foi rebatizada como JavaScript.

Diferentemente da maioria das linguagens de programação , a linguagem JavaScript não possui o conceito de entrada e saída. Ela é projetada para funcionar como uma linguagem de script em um ambiente de terceiros, e cabe ao ambiente fornecer mecanismos para a comunicação com o mundo exterior. 


A JavaScript é uma linguagem dinâmica orientada a objetos; tem tipos e operadores, objetos e métodos. Uma das principais diferenças é que o JavaScript não tem classes; em vez disso, a funcionalidade de classe é realizada por protótipos de objetos. A outra diferença principal é que as funções são objetos, dando as funções a capacidade para armazenar código executável e serem passadas como parametro para qualquer outro objeto.

### Concatenação
* O sinal de + em JavaScript é **concatenação**.

* No JavaScript utilizamos // para comentar linhas 

* Podemos comentar blocos com barra asterístico /**/

* Dentro de HTML o recomendado é solicitar os scripts através do src e criar o arquivo javaScript separado.


### Variáveis
* Primeiro caracter de uma variável precisa ser uma letra, apenas $ e _ é permitido como caracter especial.

* Não podemos criar variáveis com palavras reservadas pela linguagem exemplo: if, let...

* Variáveis precisam ter nomes significativos.

* Não podemos criar variáveis com a primeira letra sendo um número.

* Não podem conter espaços ou traços - nome-completo o correto será camelCase nomeCompleto

* Existe Case Sensitive - nomeCliente é diferente de nomecliente

* Não podemos redeclarar variáveis com let

* Não utilize var, Utilize let para variáveis que irão ser alteradas

##### Constantes

* Constantes não permite apenas ser declarada. É obrigatório já colocar um valor na criação da constante.

* Constantes não permite modificar seu valor.

* Para descobrir o tipo do conteúdo da variavel utilize a função typeof()
console.log( typeof(nomeDaVariavel) );
   - O operador + (adição) fará soma de números, porém com strings fará concatenação.

### Tipos de Dados
- string
- número inteiro
- número real
- boleano
- array
- objeto
- null
- undefined
- NaN

##### Dados primitivos

Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.

Em detalhes
Na maior parte do tempo, um valor primitivo é representado diretamente através do mais baixo nível da implementação de uma linguagem.

No JavaScript, existem 6 tipos primitivos:

 **String | Number | Boolean | Null | undefined | Symbol (novo no ECMAScript (en-US) 6)**

//E por que é crucial entender a diferença
//JavaScript é uma linguagem orientada a objetos: isso significa que a maioria das coisas em JavaScript são Objetos. Por exemplo, as funções são Objetos. Os únicos elementos que não são objetos são os Dados de Tipos Primitivos: string, number, boolean, null e undefined. Esses tipos de dados primitivos também são imutáveis, o que significa que, uma vez criados, eles não podem ser modificados.

//Uma das diferenças entre os dois é que os dados de tipos primitivos são passados como valor e os objetos são passados como referência.

//Dados de Tipos Primitivos são passados como valor e Objetos são passados como referência.
/*
O que isso significa? Você pode pensar nisso dessa maneira:

Por Valor: Significa criar uma CÓPIA do original. Imagine gêmeos: eles nascem exatamente iguais, mas o primeiro gêmeo não tem seu cabelo modificado quando o segundo gêmeo corta o próprio.

Por Referência: Significa criar um APELIDO (alias) para o original. Quando sua mãe te chama de “Doce de Leite”, embora seu nome seja Eduardo, isso não cria um clone de você mesmo: você ainda é você, mas você pode ser chamado por esses dois nomes muito diferentes.

Vamos ver a forma como os valores primitivos e os objetos se comportam, primeiro quando atribuímos valores com o operador de atribuição (=) e segundo quando passamos para uma função como um parâmetro.

1. Atribuindo um valor com o operador = com Valores Primitivos e Objetos
Com Valores Primitivos, o operador = funciona por valor
*/
//Considere o código abaixo:
var name = "Carlos"; var firstName = name;

name = "Carla";

console.log(name); // "Carla"
console.log(firstName); // "Carlos"
/*
O resultado é bastante direto: é o operador = está trabalhando por valor. O que realmente acontece aqui pode ser simplificado da seguinte forma:

Uma variável name é criada e recebe o valor “Carlos”. Um pedaço de memória em JavaScript é alocado para ele.

Uma variável firstName é criada e recebe uma cópia do valor de name. firstName tem seu próprio ponto de memória e é independente de name. Neste momento no código,firstName também tem um valor “Carlos”.

Em seguida, alteramos o valor de name para “Carla”. Mas firstName ainda mantém seu valor original, porque ele vive em um ponto de memória diferente.

Ao trabalhar com valores primitivos, o operador = cria uma cópia da variável original. Isso é o que “por valor” significa.

Com objetos, o operador = funciona por referência
*/
//Considere o código abaixo:

var myName = { firstName: "Carlos" }; var identity = myName;

myName.firstName = "Carla";

console.log(myName.firstName); // "Carla"
console.log(identity.firstName); // "Carla"
/*
Aqui, o resultado é o mesmo para as variáveis que contêm objetos. Isso ocorre porque, ao lidar com objetos, o operador = funciona por referência. O que realmente acontece pode ser descrito da seguinte forma:

Uma variável myName é criada e recebe o valor de um objeto que possui uma propriedade chamada firstName. firstName tem o valor de “Carlos”. É alocado um pedaço em memória no JavaScript para myName e o objeto que ele contém.

Uma variável identity é criada, apontando uma referência para myName. Não há espaço em memória dedicado ao valor identity. Ele apenas aponta para o valor do myName.

Alteramos o valor da propriedade firstName em myName para “Carla”, ao invés de “Carlos”.

Quando logamos myName.firstName, ele exibe o novo valor, que é esperado. Mas quando nós logamos identity.firstName, ele também exibe o novo valor de myName.firstName, “Carla”. Isso acontece porque identity.firstName apenas aponta para o lugar em memória de myName.firstName.

Ao trabalhar com objetos, o operador = cria um alias para o objeto original, ele não cria um novo objeto. Isso é o que “por referência” significa.

2. Passando Valores Primitivos e Objetos para uma função
Dados de Tipos Primitivos são passados para uma função como valor
Se você alterar o valor de um dado de tipo primitivo dentro de uma função, essa alteração não afetará a variável no escopo externo:
*/
var myName = "Carlos";

function myNameIs(aName){ aName = "Carla"; }

myNameIs(myName);

console.log(myName); // "Carlos"
/*
Mesmo que mudando a variávelmyName dentro da função myNameIs, quando logamos, depois de chamar a função, ela ainda possui o valor “Carlos”. Isso ocorre porque quando os tipos primitivos são passados, eles são passados como valor.

Estamos passando uma cópia de myName: qualquer coisa que você faça para myName dentro do corpo da função não afetará myName no escopo global, porque você está passando uma cópia de myName e não a variável myName original.

Objetos são passados para uma função como referência
Quando você está passando algo por referência, você está passando algo que aponta para outra coisa, e não uma cópia do objeto. Portanto, como o JavaScript passa objetos por referência, quando você altera uma propriedade desse objeto dentro da função, a alteração será refletida no escopo externo:
*/
var myName = {};

function myNameIs(aName){ aName.firstName = "Carla"; }

myNameIs(myName);

console.log(myName); // Object {firstName: "Carla"}
/*
Logando a variável myName depois de ter invocado a função myNameIs, irá mostrar um objeto com uma chave firstName com um valor igual a “Carla”. O objeto mudou no escopo global quando o passamos para a função.

Isso ocorre porque quando você passa um objeto para a função, você não está passando uma cópia. Você está passando algo que aponta para o objeto myName. Então, quando você altera uma propriedade desse objeto na função, você está mudando a propriedade do objeto no escopo externo.
*/
//Mas há uma coisa com a qual você deve prestar atenção:

var myName = { firstName: "Carla" };

function myNameIs(aName){ aName = { nickName: "Carlita" }; }

myNameIs(myName);

console.log(myName); // Object {firstName: "Carla"}
/*Aqui logamos o valor da variável myName no escopo externo, e verificamos que não foi adicionado uma propriedade nickName ao objeto. Por quê? Se você olhar com atenção, o que estamos tentando fazer na função é reatribuir o objeto myName com um novo valor.

Você não pode alterar onde myName aponta, você só pode alterar uma propriedade dentro do objeto myName, para qualquer outra coisa: */
var myName = { firstName: "Carla" };

function myNameIs(aName){ aName.nickName = "Carlita"; }

myNameIs(myName);

console.log(myName); // Object {firstName: "Carla", nickName: "Carlita"}

##### String
Você pode converter uma string em um inteiro usando a função embutida parseInt(). 
Similarmente, você pode fazer a conversão de números de ponto flutuante usando a função embutida parseFloat() que usa a base 10 sempre, ao contrário de seu primo parseInt().

Você também pode usar o operador unário + para converter valores em números:

```
> + "42"
42
```
 `.length` - Retorna o tamanho de uma string
const textSize = 'Paralelepípedo'.length; // length fala a quantidade de caracteres da string
console.log(`Quantidade de letras: ${textSize}`);

`.split('c')` - Retorna um array quebrando a string por um delimitador
const splittedText = 'Caracteres'.split('c');
console.log('\nArray com as posições separadas pelo delimitador (c):', splittedText);

`split()` - O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caracter separador é removido das substrings resultantes no array.


`.replace` - Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');//O primeiro parâmetro é o que vamos procurar e o segundo é o valor que ela terá
console.log('\nSubstituição de valor:', replacedText);

`.slice` - Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);//-1 retorna o último caracter
console.log('\nÚltima letra de uma string:', lastChar);

No slice a gente passa o start e o end
const allWithoutLastChar = 'Paralelepípedo'.slice(0, -1);// estabelece a primeira e última posição desejada
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

Veja:
const secondToEnd = 'Paralelepípedo'.slice(1);//apenas um parâmetro se refere ao primeiro parâmetro da função
console.log('\nValor da string da segunda letra até a última:', secondToEnd);
Neste exemplo mostra da posição escolhida para o primeiro parâmetro até a última letra da string

`.substr` - Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Paralelepípedo'.substr(0, 5);//No substr a gente passa o inicio e a quantidade de caracters
console.log('\nAs cinco primeiras letras são:', twoCharsBeforeFirstPos);

##### Number
Um valor especial chamado NaN (sigla de "Not a Number ou Não é Número") é retornado se a string não é um valor numérico:
Você pode testar se é NaN usando a função embutida `isNaN()`:

const myNumber = 12.4032;

// Transformar número para string
`const numberAsString = myNumber.toString();`
`console.log('Número transformado em string:', numberAsString);` //transformou o myNumber para o tipo string. O valor é 12.4032 mas o tipo é string. Veja:
`console.log(typeof numberAsString);` //Ele continua tendo o valor, mas o tipo dele é uma string

// Retorna número com um número de casas decimais
`const fixedTwoDecimals = myNumber.toFixed(2);`//com toFixed você estabelece a quantidade de casas decimais
`console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);`

// Transforma uma string em float
`console.log('\nString parseada para float:', parseFloat('13.22'));`//parseFloat permite casas decimais
console.log(typeof parseFloat('13.22')); 

// Transforma uma string em inteiro
`console.log('\nString parseada para int:', parseInt('13.20'));`//parseInt permite casas decimais
`console.log(typeof parseInt('13.20'));` 

//No tipo de número só temos o type number, não existe os tipos inteiros ou decimais (Int, Float)

`console.log('\nString parseada para float:', parseFloat('13.20'));`
`console.log('\nString parseada para float, mostrando o zero:', parseFloat('13.20').toFixed(2));`//Casas decimais terminadas com zero não são apresentadas. Se você precisa que apareça o zero é necessário chamar o toFixed()

##### Boolean
`const isActive = true;`
`const isAutenticated = false;`
`console.log(isActive);`
`console.log(isAutenticated);`
`console.log('Tipo da variável:', typeof isActive);`
`console.log('Tipo da variável:', typeof isAutenticated);`

##### Null
`const nullVariable = null;`
`console.log(nullVariable);`
`console.log(typeof nullVariable);`
//essa é a pegadinha. Mesmo existindo o tipo primitivo null, quando a gente dá um console.log ele aparece como object.

##### undefined
```
let undefinedVariable;
console.log(undefinedVariable);
console.log('Tipo da variável:', typeof undefinedVariable);
```

##### Symbol (novo no ECMAScript (en-US) 6)
Todos os primitivos são imutáveis (não podem ter o seu valor modificado).


### Operadores
##### Operadores Lógicos
! Não (not) - 1º
&& E (and) - 2º
|| Ou (or) - 3º
### Estruturas Condicionais
### Arrays
### Object
### Escopo
### Estruturas de Repetição
### Manipulação de strings
### Manipulação de datas
### Function
### Arrow Functions
### Manipulação de arrays
### Classes
### Modificadores de acesso
### Encapsulamento
### Static
### Herança

## Autor
Desenvolvido por Héber Silvério 👋 Fique a vontade para se conectar

<a href="https://www.linkedin.com/in/hebersilverio/" rel="nofollow"><img src="https://camo.githubusercontent.com/c93fed3759c4a34198be7edef401a101e9454245/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465266c696e6b3d68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6d617263696c696f636f72726569612f" alt="Linkedin Badge" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?&amp;style=for-the-badge&amp;logo=linkedin&amp;logoColor=white&amp;link=https://www.linkedin.com/in/hebersilverio/" style="max-width:100%;"></a>