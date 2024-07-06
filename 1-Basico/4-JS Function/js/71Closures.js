/*
Closures
Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
*/
// function retornaFuncao() {
//    const nome = 'Criador';
//    return function() {
//       return nome;
//    };
// }
// const funcao = retornaFuncao();
// console.dir(funcao);

function retornaFuncao(diz) {
   return function() {
      return diz;
   };
}
const dizer = retornaFuncao('Semelhança');
const dizer2 = retornaFuncao('Imagem');
console.dir(dizer);
console.dir(dizer2);