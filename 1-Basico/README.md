# [JavaScript - Básico](#javascript---básico)
## [Variáveis](#variáveis)
## [Constantes](#constantes)
## [Dados primitivos](#dados-primitivos)

### Concatenação
-- O sinal de + em JavaScript é **concatenação**.

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

#### Constantes

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

### Dados primitivos

### Resumo
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
// Retorna o tamanho de uma string
const textSize = 'Paralelepípedo'.length; // length fala a quantidade de caracteres da string
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Caracteres'.split('c');
console.log('\nArray com as posições separadas pelo delimitador (c):', splittedText);
//O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caracter separador é removido das substrings resultantes no array.


// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');//O primeiro parâmetro é o que vamos procurar e o segundo é o valor que ela terá
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);//-1 retorna o último caracter
console.log('\nÚltima letra de uma string:', lastChar);

//No slice a gente passa o start e o end
const allWithoutLastChar = 'Paralelepípedo'.slice(0, -1);// estabelece a primeira e última posição desejada
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

//mostra da posição escolhida para o primeiro parâmetro até a última letra da string
const secondToEnd = 'Paralelepípedo'.slice(1);//apenas um parâmetro se refere ao primeiro parâmetro da função
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Paralelepípedo'.substr(0, 5);//No substr a gente passa o inicio e a quantidade de caracters
console.log('\nAs cinco primeiras letras são:', twoCharsBeforeFirstPos);

##### Number
Um valor especial chamado NaN (sigla de "Not a Number ou Não é Número") é retornado se a string não é um valor numérico:
Você pode testar se é NaN usando a função embutida isNaN():

##### Boolean
##### Null
##### undefined
##### Symbol (novo no ECMAScript (en-US) 6)
Todos os primitivos são imutáveis (não podem ter o seu valor modificado).





## Operadores
## Estruturas Condicionais
## Arrays
## Object
## Escopo
## Estruturas de Repetição
## Manipulação de strings
## Manipulação de datas
## Function
## Arrow Functions
## Manipulação de arrays
## Classes
## Modificadores de acesso
## Encapsulamento
## Static
## Herança