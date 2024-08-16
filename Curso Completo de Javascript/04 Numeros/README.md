Onde encontrar conteúdo para se aprofundar:

1. Livros sobre Arquitetura de Computadores:

- "Computer Organization and Design" de David Patterson e John Hennessy.
- "Modern Computer Architecture and Organization" de Jim Ledin.

2. Sites e Recursos Online:

- [IEEE 754 Standard for Floating-Point Arithmetic (em inglês)](https://en.wikipedia.org/wiki/IEEE_754)
- Khan Academy - vídeos sobre conversão de números e representação binária.
- Artigos sobre ponto flutuante no Medium - Procure por "IEEE 754 floating-point".

3. Cursos Online:

- Coursera - Cursos de ciência da computação que abordam a representação de dados.
- edX - Cursos relacionados à arquitetura de computadores.
Esses recursos devem ajudá-lo a entender melhor como os números são transformados em bits e transportados pela internet.



#### Concatenação de strings com binário +
Normalmente, o operador mais +soma números. Mas, se o binário +for aplicado a strings, ele as mescla (concatena):;

O binário + é o único operador que suporta strings dessa forma. Outros operadores aritméticos trabalham apenas com números e sempre convertem seus operandos em números.

#### Conversão numérica, unária +
O sinal de mais +existe em duas formas: a forma binária que usamos acima e a forma unária.

O unário mais ou, em outras palavras, o operador mais +aplicado a um único valor, não faz nada com números. Mas se o operando não for um número, o unário mais o converte em um número.

Por exemplo:

```hash
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```

Na verdade, ele faz a mesma coisa que Number(...), mas é mais curto.

A necessidade de converter strings em números surge com muita frequência. Por exemplo, se estamos obtendo valores de campos de formulário HTML, eles geralmente são strings. E se quisermos somá-los?

O binário mais os adicionaria como strings:

```hash
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
```
Se quisermos tratá-los como números, precisamos convertê-los e depois somá-los:

```hash
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

#### Precedência do operador
Dentro de operadores de mesma precedência, a linguagem os agrupa por associatividade. Associatividade à esquerda (da esquerda para a direita) significa que é interpretado como (a OP1 b) OP2 c, enquanto associatividade à direita (da direita para a esquerda) significa que é interpretado como a OP1 (b OP2 c). Operadores de atribuição são associativos à direita, então você pode escrever:

```hash
a = b = 5; // same as writing a = (b = 5);
```

Como outro exemplo, o operador de exponenciação única tem associatividade à direita, enquanto outros operadores aritméticos têm associatividade à esquerda.

```hash
const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```

```hash
function echo(name, num) {
  console.log(`Avaliando o ${name} lado`);
  return num;
}
// Exponentiation operator (**) is right-associative,
// but all call expressions (echo()), which have higher precedence,
// will be evaluated before ** does
console.log(echo("left", 4) ** echo("middle", 3) ** echo("right", 2));
// Evaluating the left side
// Evaluating the middle side
// Evaluating the right side
// 262144

// Exponentiation operator (**) has higher precedence than division (/),
// but evaluation always starts with the left operand
console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));
// Evaluating the left side
// Evaluating the middle side
// Evaluating the right side
// 0.4444444444444444
```


[Ver tabela de precedência](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)


#### Operadores bit a bit
Operadores bit a bit tratam argumentos como números inteiros de 32 bits e trabalham no nível de sua representação binária.

Esses operadores não são específicos do JavaScript. Eles são suportados na maioria das linguagens de programação.

A lista de operadores:

E ( &)
OU ( |)
XOU ( ^)
NÃO ( ~)
SHIFT ESQUERDA ( <<)
DESLOCAMENTO À DIREITA ( >>)
DESLOCAMENTO À DIREITA COM ZERO ( >>>)
Esses operadores são usados ​​muito raramente, quando precisamos mexer com números no nível mais baixo (bitwise). Não precisaremos desses operadores tão cedo, pois o desenvolvimento web tem pouco uso deles, mas em algumas áreas especiais, como criptografia, eles são úteis. Você pode ler o capítulo [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators) no MDN quando surgir uma necessidade.

#### Conversões de tipo

Quais são os resultados dessas expressões?

| Expressão                          |
|------------------------------------|
| "" + 1 + 0 (10)                    |
| "" - 1 + 0 (string)                |
| true + false (false)               |
| 6 / "3" (string)                   |
| "2" * "3" (23)                     |
| 4 + 5 + "px" (9px)                 |
| "$" + 4 + 5 ($45)                  |
| "4" - 2 (string)                   |
| "4px" - 2                          |
| "  -9  " + 5                       |
| "  -9  " - 5                       |
| null + 1                           |
| undefined + 1                      |
| " \t \n" - 2                       |

> Pense bem, anote e depois compare com a resposta. 






| Expressão             | Resultado    | variavel     | typeof       | Resut        |
|-----------------------|--------------|--------------|--------------|--------------|
| ` "" + 1 + 0 = `      | "10" // (1)  | ` let a = "" + 1 + 0;` | `console.log(a, typeof a);` | 10 string |
| "" - 1 + 0 =          | -1 // (2)    |let b = "" - 1 + 0; | console.log(b, typeof b); | -1 number |
| true + false =        | 1            |let c = true + false; | console.log(c, typeof c); | 1 number |
| 6 / "3" =             | 2            |let d = 6 / "3";  | console.log(d, typeof d); | 2 number |
| "2" * "3" =           | 6            |let e = "2" * "3"; | console.log(e, typeof e); | 6 number |
| 4 + 5 + "px" =        | "9px"        |let f = 4 + 5 + "px"; | console.log(f, typeof f);  | 9px string |
| "$" + 4 + 5 =         | "$45"        |let g = "$" + 4 + 5; | console.log(g, typeof g); | $45 string |
| "4" - 2 =             | 2            |let h = "4" - 2; | console.log(h, typeof h); | 2 number |
| "4px" - 2 =           | NaN          |let i = "4px" - 2; | console.log(i, typeof i);  | NaN number |
| "  -9  " + 5 =        | "  -9  5" // (3) |let j = "  -9  " + 5; | console.log(j, typeof j); |   -9  5 string |
| "  -9  " - 5 =        | -14 // (4)   |let k = "  -9  " - 5; | console.log(k, typeof k); | -14 number |
| null + 1 =            | 1 // (5)     |let l = null + 1; | console.log(l, typeof l); | 1 number |
| undefined + 1 =       | NaN // (6)   |let m = undefined + 1; | console.log(m, typeof m); | NaN number |
| " \t \n" - 2 =        | -2 // (7)    |let n = " \t \n" - 2; | console.log(n, typeof n); | -2 number |
