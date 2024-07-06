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
}
const resposta1 = logicaEart(3, 2);
const resposta2 = logicaEart(150, 3);
const resposta3 = logicaEart(7, -1);
const resposta4 = logicaEart(-2, 5);
const resposta5 = logicaEart(50, 3);

const resolucao = [
   {z: resposta1[0], r: resposta1[1]}, 
   {z: resposta2[0], r: resposta2[1]}, 
   {z: resposta3[0], r: resposta3[1]}, 
   {z: resposta4[0], r: resposta4[1]}, 
   {z: resposta5[0], r: resposta5[1]}, 
   
];

for (let i = 0; i < resolucao.length; i++) {
   let { z, r } = resolucao[i];
   let colunaZ = document.querySelector(`.c${[i]}`);
   let spanColunaZ = document.createElement('span');
   spanColunaZ.classList.add('resultado');
   spanColunaZ.innerHTML = z;
   colunaZ.appendChild(spanColunaZ);

   let colunaResposta = document.querySelector(`.d${[i]}`);
   let spanColunaResposta = document.createElement('p');
   spanColunaResposta.classList.add('resultado');
   spanColunaResposta.innerHTML = r;
   colunaResposta.appendChild(spanColunaResposta);
}

