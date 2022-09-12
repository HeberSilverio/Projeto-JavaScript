// function retangulo() {
//    const numeroLinhas = 5;

//    const lines = 10;
//    const colunas = 60;

//    for (i = 0; i <= numeroLinhas; i++ ){
//       for(j = 0; j <= i; j++) {
         
//          let desenha = i;
//          console.log(desenha++)

//       };
//       console.log("")
//    };
// };

// retangulo();

// function exibirAsteriscos(linhas){
//    let padrao = '';
//    for (let linha = 1; linha <= linhas; linha++ ){
//       padrao += '+';
//       console.log(padrao);
//    }
// }

// exibirAsteriscos(5);

// function exibirAsteriscos(linhas){
//    for(let linha = 1; linha <= linhas; linha++) {
//       let padrao = '';
//       for(let i = 0; i < linha; i++){
//          padrao += '+';
//       }
//       console.log(padrao);
//    }
   
// }
// exibirAsteriscos(5);

// function exibirAsteriscos(tamanho){
//    let padrao = '';

//    for(let i = 1; i <= tamanho; i++) {
//       padrao += '+';
//       console.log(padrao)
//    }
   
// }
// exibirAsteriscos(5);

// function exibirAsteriscos(linhas){
//    let padrao = '';
//    for (let linha = 5; linha <= linhas; linha++ ){
//       padrao += '+';
//       console.log(padrao);
//    }
// }

// exibirAsteriscos(5);


HTMLNovo1 = document.createTextNode('*')
fragment = new DocumentFragment();
fragment.appendChild(HTMLNovo1);
container.insertBefore(fragment);