/*
inicio
   ler x
   ler y
   z <- (x*y) + 5
   se z <= 0 então
      resposta <- 'A'
   senão
      se z <= 100 então 
         resposta <- 'B'
      senão
         resposta <- 'C'
      fim_se
   fim_se
   escrever z, resposta
fim
*/

let x;
let y;
let z;
let resposta;


function logicaEart(x, y,) {
   z = (x * y) + 5;
   if( z <= 0) {
      resposta = " A";
  } else if (z <= 100) {
     resposta = " B";
  } else {
     resposta = " C";
  }
  return  [z, resposta];
  console.log(z + resposta);
}



// const [zLinha1, respostaLinha1] = logicaEart(3, 2);
const resposta1 = logicaEart(3, 2);
z1 = resposta1[0];
r1 = resposta1[1];
console.log(z1);
console.log(r1);

const resposta2 = logicaEart(150, 3);
z2 = resposta2[0];
r2 = resposta2[1];
console.log(z2);
console.log(r2);

const resposta3 = logicaEart(7, -1);
z3 = resposta3[0];
r3 = resposta3[1];
console.log(z3);
console.log(r3);

const resposta4 = logicaEart(-2, 5);
z4 = resposta4[0];
r4 = resposta4[1];
console.log(z4);
console.log(r4);

const resposta5 = logicaEart(50, 3);
z5 = resposta5[0];
r5 = resposta5[1];
console.log(z5);
console.log(r5);
   
   
   


function setResult (msg) {
   const resultado = document.querySelector('.c2');
   resultado.innerHTML = '';
   const span = document.createElement('span');
   span.classList.add('resultado');
   span.innerHTML = z1;
   resultado.appendChild(span);
}
setResult();

// for (let i = 0; i < resposta1.length; i++) {
//    z1 = resposta1[i];
//    console.log(`Resposta de z ${z1}`)
// }