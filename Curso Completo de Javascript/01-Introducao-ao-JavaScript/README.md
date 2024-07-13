### Introdução ao JavaScript

##### Visão Geral

A JavaScript foi criada em 1995 por Brendan Eich, um engenheiro da Netscape, e lançada pela primeira vez com o Netscape 2 no início de 1996. Foi inicialmente chamada de LiveScript, mas logo foi rebatizada como JavaScript.

Diferentemente da maioria das linguagens de programação , a linguagem JavaScript não possui o conceito de entrada e saída. Ela é projetada para funcionar como uma linguagem de script em um ambiente de terceiros, e cabe ao ambiente fornecer mecanismos para a comunicação com o mundo exterior. 

A JavaScript é uma linguagem dinâmica orientada a objetos; tem tipos e operadores, objetos e métodos. Uma das principais diferenças é que o JavaScript não tem classes; em vez disso, a funcionalidade de classe é realizada por protótipos de objetos. A outra diferença principal é que as funções são objetos, dando as funções a capacidade para armazenar código executável e serem passadas como parametro para qualquer outro objeto.

##### O que é JavaScript?
JavaScript, frequentemente abreviado como JS, é uma linguagem de programação que é uma das principais tecnologias da World Wide Web, junto com HTML e CSS. Ela nos permite adicionar interatividade às páginas, por exemplo, você pode ter visto sliders, alertas, interações de clique, pop-ups, etc. em diferentes sites — tudo isso é construído usando JavaScript. Além de ser usado no navegador, ele também é usado em outros ambientes que não sejam navegadores, como Node.js para escrever código do lado do servidor em JavaScript, Electron para escrever aplicativos de desktop, React Native para aplicativos móveis e assim por diante.


##### Estrutura do código
A primeira coisa que estudaremos são os blocos de construção do código.

Declarações: <br>
Instruções são construções de sintaxe e comandos que executam ações.

Já vimos uma declaração, alert('Hello, world!'), que mostra a mensagem “Olá, mundo!”.

Podemos ter quantas declarações em nosso código quisermos. As declarações podem ser separadas por ponto e vírgula.

Por exemplo, aqui dividimos “Hello World” em dois alertas:

```alert('Hello'); alert('World');```
Normalmente, as instruções são escritas em linhas separadas para tornar o código mais legível:

`alert('Hello');` <br>
`alert('World');`
- Ponto e vírgula <br>
Um ponto e vírgula pode ser omitido na maioria dos casos quando há uma quebra de linha.

Isso também funcionaria:

```hash
alert('Hello')
alert('World')
```
Aqui, o JavaScript interpreta a quebra de linha como um ponto e vírgula “implícito”. Isso é chamado de inserção automática de ponto e vírgula .

Na maioria dos casos, uma nova linha implica um ponto e vírgula. Mas “na maioria dos casos” não significa “sempre”!

Há casos em que uma nova linha não significa um ponto e vírgula. Por exemplo:

```hash
alert(3 +
1
+ 2);
```
O código gera 6porque o JavaScript não insere ponto e vírgula aqui. É intuitivamente óbvio que se a linha termina com um sinal de mais "+", então é uma “expressão incompleta”, então um ponto e vírgula ali seria incorreto. E neste caso, isso funciona como pretendido.

Mas há situações em que o JavaScript “falha” em assumir um ponto e vírgula onde ele é realmente necessário.

Erros que ocorrem nesses casos são muito difíceis de encontrar e corrigir.

##### Um exemplo de erro
Se você estiver curioso para ver um exemplo concreto de tal erro, confira este código:

```hash
alert("Hello");

[1, 2].forEach(alert);
```

Não precisa pensar no significado dos colchetes [] e forEach ainda. Nós os estudaremos mais tarde. Por enquanto, apenas lembre-se do resultado da execução do código: ele mostra Hello, então 1, então 2.

Agora vamos remover o ponto e vírgula depois de alert:

```hash
alert("Hello")

[1, 2].forEach(alert);
```
A diferença em relação ao código acima é apenas um caractere: o ponto e vírgula no final da primeira linha desapareceu.

Se executarmos esse código, apenas o primeiro Hello aparece (e há um erro, talvez seja necessário abrir o console para vê-lo). Não há mais números.

Isso ocorre porque o JavaScript não assume um ponto e vírgula antes dos colchetes [...]. Então, o código no último exemplo é tratado como uma única declaração.

Veja como o motor vê isso:

`alert("Hello")[1, 2].forEach(alert);`

Parece estranho, certo? Tal mesclagem neste caso é simplesmente errada. Precisamos colocar um ponto e vírgula depois alertpara que o código funcione corretamente.

Isso também pode acontecer em outras situações.

Recomendamos colocar ponto e vírgula entre as instruções, mesmo que elas sejam separadas por quebras de linha. Essa regra é amplamente adotada pela comunidade. Vamos observar mais uma vez – é possível deixar de fora ponto e vírgula na maioria das vezes. Mas é mais seguro – especialmente para um iniciante – usá-los.

#### Comentários
Conforme o tempo passa, os programas se tornam mais e mais complexos. Torna-se necessário adicionar comentários que descrevam o que o código faz e por quê.

Comentários podem ser colocados em qualquer lugar de um script. Eles não afetam sua execução porque o mecanismo simplesmente os ignora.

Comentários de uma linha começam com duas barras //.

O restante da linha é um comentário. Pode ocupar uma linha inteira ou seguir uma declaração.

Como aqui:

```
// This comment occupies a line of its own
alert('Hello');
```

`alert('World'); // This comment follows the statement`

Comentários multilinha começam com uma barra e um asterisco /* e terminam com um asterisco e uma barra */.

Assim:
```hash
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');
```
O conteúdo dos comentários é ignorado, então se colocarmos código dentro /* … */, ele não será executado.

Às vezes, pode ser útil desabilitar temporariamente uma parte do código:

```
/* Commenting out the code
alert('Hello');
*/
alert('World');
```
Use teclas de atalho!
<br>Na maioria dos editores, uma linha de código pode ser comentada pressionando a tecla de atalho para um comentário de linha única e algo como – para comentários de várias linhas (selecione um pedaço de código e pressione a tecla de atalho). No vscode é `Ctrl+;` 

> Comentários aninhados não são suportados!
**Pode não haver /*...*/dentro de outro /*...*/.**

Esse código morrerá com um erro:

```hash
/*
  /* nested comment ?!? */
*/
alert( 'World' );
```
Por favor, não hesite em comentar seu código.

Comentários aumentam a pegada geral do código, mas isso não é um problema. Existem muitas ferramentas que minificam o código antes de publicar em um servidor de produção. Elas removem comentários, para que eles não apareçam nos scripts de trabalho. Portanto, comentários não têm efeitos negativos na produção.

Mais adiante no tutorial, haverá um capítulo sobre qualidade do código que também explica como escrever comentários melhores.