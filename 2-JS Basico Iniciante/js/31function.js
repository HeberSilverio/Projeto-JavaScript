// function saudacao(nome) {
//    // nome = "Héber"
   
//    return `Bom dia ${nome}!`
// }

// const simpatico = saudacao('Héber');
// console.log(simpatico);



// function soma(x = 1, y = 1) {// coloquei um valor padrão 1 caso não seja passado no parâmetro
//    const resultado = x + y;
//    return resultado;
// }

// console.log(soma( ));

// const raiz = function(n) {
//    return n ** 0.5;
// };
// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

// const raiz = (n) => { //arraw function, substitui a palavra function por =>
//    return n ** 0.5;
// };
// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

/* arrow function é para facilitar então podemos 
- substituir a palavra function por =>
- posso eliminar a {chaves e o ponto vírgula };
- posso eliminar a return
- e se for apenas um parâmetro na função posso eliminar os parênteses do parâmetro.
*/
const raiz = n => n ** 0.5;

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))