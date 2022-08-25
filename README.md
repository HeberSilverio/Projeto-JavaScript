# Projeto-JavaScript
Descobrindo tudo sobre JavaScript

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
* Number
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
<a target="_blank" rel="noopener noreferrer" href="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/Aulas/exercicios/Exe-func-array-objetos/GifHTML.gif">
    <img src="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/Aulas/exercicios/Exe-func-array-objetos/GifHTML.gif" alt="Array-Objeto" style="max-width: 40%;">
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
<a target="_blank" rel="noopener noreferrer" href="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/Aulas/exercicios/Exe-func-array-objetos/GifHTML.gif">
    <img src="https://github.com/HeberSilverio/Projeto-JavaScript/blob/main/Aulas/exercicios/Exe-func-array-objetos/GifHTML.gif" alt="Array-Objeto" style="max-width: 40%;">
</a> </br>
# JavaScript - Funções (Avançado
# JavaScript - Arrays (Avançado)
# JavaScript - Objeto e Prototypes (Avançado)
# JavaScript - Programação Orientada a Objeto (POO)
# JavaScript - Assíncrono (Promises, Ajax, Fetch e Async/Await)
# JavaScript - Tooling e ES6 Modules (Módulos)
# JavaScript - Node, Npm, Express e MongoDB