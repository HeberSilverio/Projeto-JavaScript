### Tudo sobre Variáveis no ​​Javascript
Na maioria das vezes, um aplicativo JavaScript precisa trabalhar com informações. Para armazenar e representar essas informações na base de código JavaScript, usamos variáveis. Uma variável é um contêiner para um valor.

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


#### Uma variável
Também podemos declarar múltiplas variáveis ​​em uma linha:

```hash
let user = 'John', age = 25, message = 'Hello';
```
Isso pode parecer mais curto, mas não recomendamos. Para melhor legibilidade, use uma única linha por variável.

A variante multilinha é um pouco mais longa, mas mais fácil de ler:

```hash
let user = 'John';
let age = 25;
let message = 'Hello';
Algumas pessoas também definem múltiplas variáveis ​​neste estilo multilinha:
```

```hash
let user = 'John',
  age = 25,
  message = 'Hello';
…Ou mesmo no estilo “primeiro a vírgula”:
```

```hash
let user = 'John'
  , age = 25
  , message = 'Hello';
Tecnicamente, todas essas variantes fazem a mesma coisa. Então, é uma questão de gosto pessoal e estética.
```
