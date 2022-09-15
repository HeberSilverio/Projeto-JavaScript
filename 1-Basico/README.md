# [JavaScript - Básico](#javascript---básico)

## 📋 Índice

* [Visão Geral]()
* [Concatenação]()
* [Variáveis](https://github.com/HeberSilverio/Projeto-JavaScript/tree/main/1-Basico#vari%C3%A1veis-1)
* [Constantes](#constantes)
* [Tipos de Dados](#dados-primitivos)

* [Operadores]()
* [Estruturas-Condicionais]()
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
##### Null
##### undefined
##### Symbol (novo no ECMAScript (en-US) 6)
Todos os primitivos são imutáveis (não podem ter o seu valor modificado).





### Operadores
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