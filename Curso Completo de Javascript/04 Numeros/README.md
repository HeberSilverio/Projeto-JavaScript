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