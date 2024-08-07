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
```

…Ou mesmo no estilo “primeiro a vírgula”:
```hash
let user = 'John'
  , age = 25
  , message = 'Hello';
```
Tecnicamente, todas essas variantes fazem a mesma coisa. Então, é uma questão de gosto pessoal e estética.

#### Principal diferença entre var e let

A principal diferença entre var e let em JavaScript está no escopo e no comportamento de hoisting. Aqui está um resumo:

**var**
- Escopo de Função: A variável declarada com var é escopada à função mais próxima. Se declarada fora de qualquer função, é global.
-Hoisting: As declarações de var são "elevadas" ao topo do seu escopo, mas não a inicialização. Isso significa que você pode usar a variável antes de sua declaração, mas ela terá o valor undefined até ser inicializada.
- Re-declaração: Permite re-declaração da mesma variável dentro do mesmo escopo.

**let**
- Escopo de Bloco: A variável declarada com let é escopada ao bloco mais próximo (delimitado por {}), como em loops ou condicionais.
- Hoisting: As declarações de let também são "elevadas", mas não podem ser acessadas antes de sua declaração no código (temporal dead zone).
- Re-declaração: Não permite re-declaração da mesma variável dentro do mesmo escopo.

Exemplo:
```hash
function example() {
    console.log(a); // undefined (hoisting)
    var a = 1;

    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 2;

    if (true) {
        var c = 3;
        let d = 4;
    }

    console.log(c); // 3 (var is function-scoped)
    // console.log(d); // ReferenceError: d is not defined (let is block-scoped)
}

example();
```