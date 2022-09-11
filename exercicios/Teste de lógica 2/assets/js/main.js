const v = [, 5, 1, 4, 2, 7, 8, 3, 6];

for (let i = 8; i >= 5; i--) {
   let aux = v[i];
   v[i] = v[8 - i + 1];
   v[8 - i + 1] = aux;
}
v[3] = v[1];
v[v[3]] = v[v[2]];

const vetorExecutado = v;

for (let i = 1; i < vetorExecutado.length; i++) {
   let linhaUm = document.querySelector(`.c${[i]}`);
   let criaSpan = document.createElement('span');
   linhaUm.appendChild(criaSpan);
   criaSpan.classList.add('resultado');
   criaSpan.innerHTML = vetorExecutado[i];
}
