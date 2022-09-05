# Projeto-JavaScript
Descobrindo tudo sobre JavaScript

A JavaScript foi criada em 1995 por Brendan Eich, um engenheiro da Netscape, e lançada pela primeira vez com o Netscape 2 no início de 1996. Foi inicialmente chamada de LiveScript, mas logo foi rebatizada como JavaScript.

Diferentemente da maioria das linguagens de programação , a linguagem JavaScript não possui o conceito de entrada e saída. Ela é projetada para funcionar como uma linguagem de script em um ambiente de terceiros, e cabe ao ambiente fornecer mecanismos para a comunicação com o mundo exterior. 

### Visão Geral

A JavaScript é uma linguagem dinâmica orientada a objetos; tem tipos e operadores, objetos e métodos. Uma das principais diferenças é que o JavaScript não tem classes; em vez disso, a funcionalidade de classe é realizada por protótipos de objetos. A outra diferença principal é que as funções são objetos, dando as funções a capacidade para armazenar código executável e serem passadas como parametro para qualquer outro objeto.

- [JavaScript - Básico](#javascript---básico)
- [JavaScript - Lógica de programação](#javascript---lógica-de-programação)
- [JavaScript - Funções (Avançado)](#javascript---funções-avançado)
- [JavaScript - Arrays (Avançado)](#javascript---arrays-avançado)
- [JavaScript - Objeto e Prototypes (Avançado)](#javascript---objeto-e-prototypes-avançado)
- [JavaScript - Programação Orientada a Objeto (POO)](#javascript---programação-orientada-a-objeto-poo)
- [JavaScript - Assíncrono (Promises, Ajax, Fetch e Async/Await)](#javascript---assíncrono-promises-ajax-fetch-e-asyncawait)
- [JavaScript - Tooling e ES6 Modules (Módulos)](#javascript---tooling-e-es6-modules-módulos)
- [JavaScript - Node, Npm, Express e MongoDB](#javascript---node-npm-express-e-mongodb)


# JavaScript - Básico
* No JavaScript utilizamos // para comentar linhas 

* Podemos comentar blocos com barra asterístico /**/

* Dentro de HTML o recomendado é solicitar os scripts através do src e criar o arquivo javaScript separado.

### Variáveis

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

## Dados primitivos

### Resumo
Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.

Em detalhes
Na maior parte do tempo, um valor primitivo é representado diretamente através do mais baixo nível da implementação de uma linguagem.

No JavaScript, existem 6 tipos primitivos:

* String
Você pode converter uma string em um inteiro usando a função embutida parseInt(). 
Similarmente, você pode fazer a conversão de números de ponto flutuante usando a função embutida parseFloat() que usa a base 10 sempre, ao contrário de seu primo parseInt().

Você também pode usar o operador unário + para converter valores em números:

```
> + "42"
42
```

* Number
Um valor especial chamado NaN (sigla de "Not a Number ou Não é Número") é retornado se a string não é um valor numérico:
Você pode testar se é NaN usando a função embutida isNaN():

* Boolean
* Null
* undefined
* Symbol (novo no ECMAScript (en-US) 6)
Todos os primitivos são imutáveis (não podem ter o seu valor modificado).

### String.prototype.split()
O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

### Sintaxe
`str.split([separator[, limit]])`

### Exercícios de para armazenar dentro de um array objetos com 4 dados de uma pessoa. 
<a target="_blank" rel="noopener noreferrer" href="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/exercicios/Exe-func-array-objetos/GifHTML.gif">
    <img src="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/exercicios/Exe-func-array-objetos/GifHTML.gif" alt="Array-Objeto" style="max-width: 50%;">
</a> </br>

# JavaScript - Lógica de programação

### Operadores
#### Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) não recomendado usar
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)

#### Operadores Lógicos
&& -> And -> E // todas as expressões precisa ser verdadeiras para retornar true
|| -> Or -> Ou // apenas uma das expressões precisam ser verdadeiras
! -> Not -> Não //
 
#### Valores avaliados em falso
false
0
'' "" ``
null / undefined
NaN

### if, else if, else
If pode ser usado sozinho
Sempre que utilizo a palavra else preciso de um if antes
Eu posso ter vários else if's na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
Mais de um bloco verdadeiro dentro do else if só vai executar o primeiro e destruir o segundo

#### HTML modelo para exercícios
<a target="_blank" rel="noopener noreferrer" href="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/modelo/assets/img/GifModelo.gif">
    <img src="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/modelo/assets/img/GifModelo.gif" alt="Array-Objeto" style="max-width: 40%;">
</a> </br>

#### Calculo de IMC, exercício prático de javaScrip
<a target="_blank" rel="noopener noreferrer" href="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/exercicios/TabelaIMC/assets/img/gifTabelaImc.gif">
    <img src="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/exercicios/TabelaIMC/assets/img/gifTabelaImc.gif" alt="Array-Objeto" style="max-width: 60%;">
</a> </br>

#### Operação ternária
(condição) ? 'Valor para verdadeiro' : 'Valor para falso';

# JavaScript - Funções (Avançado

### maneiras de declarar funções
Declaração de função (Function hoisting) - Aula 68
First-class objects - Aula 68
Function Expression - Aula 68
Arrow Function - Aula 68
Dentro de um objeto - Aula 68
posso criar esse objeto sem a palavra function e sem os dois pontos - Aula 68

Closures
Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.  - Aula 70

Podemos retornar qualquer coisa de uma função - podemos return outra função, um objeto, os valores primitivos, um setInterval   - Aula 70

#### Calculadora
<a target="_blank" rel="noopener noreferrer" href="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/exercicios/calculadora/assets/img/GifCalculadora.gif">
    <img src="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/exercicios/calculadora/assets/img/GifCalculadora.gif" alt="Calculadora" style="max-width: 60%;">
</a> </br>

# JavaScript - Arrays (Avançado)

#### Revisão Geral
- Array Literal & Construtor de array - Aula 81
- Array são dados valor por referência. Não é ideal duas variáveis apontar para outra que tem como valor um array.
- JavaScript | Spread Operator // É uma maneira de copiar um array
Sintaxe:
`var nomedavariável1 = [...valor];`
-  Para ver o tamanho do array utilizamos o atributo .length
- `.pop();` Remove o último elemento do array;
- `.pop();` Retorna o elemento removido. Podemos por exemplo jogar o elemento removido dentro de uma variável.
- `.shift();` Remove o primeiro elemento do array e muda o índice dos demais elementos.
- `.push();` Adiciona elementos no final do array.
- O método `.unshift();` insere os valores fornecidos no início de um objeto array. E muda o índice dos demais elementos.
- `console.log(.slice(1, 3));` Fatiar o array. Neste caso exibe os elementos do índice 1 e 2.
- `console.log(.slice(0, -1));` -1 remove o último elemento Exibe todos os elementos do array exceto o elemento que corresponde a última posição do índice.
- `.split(' ')` O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
#### Método Splice

OLHAR O REPOSITÓRIO Anotacoes-Bootcamp/JavaScript/Array
Utilizar este repositorio para relembrar JavaScript

# JavaScript - Objeto e Prototypes (Avançado)
# JavaScript - Programação Orientada a Objeto (POO)
# JavaScript - Assíncrono (Promises, Ajax, Fetch e Async/Await)
# JavaScript - Tooling e ES6 Modules (Módulos)
# JavaScript - Node, Npm, Express e MongoDB

