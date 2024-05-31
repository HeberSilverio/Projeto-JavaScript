window.onload = () => { addColor(); };

for(let i = 0; i < 9; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.row').appendChild(box);
}

const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function randomHexColorCode() {
  const chars = '0123456789ABCDEF';
  let colorLength = 6;
  let color = '';
  for (let i = 0; i < colorLength; i++) {
    const randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return `#` + color;
}

function addColor() {
  randomColorBlock.forEach((box) => {
    const newColor = randomHexColorCode();
    box.style.backgroundColor = newColor;

    // Limpa o conteúdo da div
    box.innerHTML = '';
    // Cria um novo elemento de parágrafo
    const p = document.createElement('p');
    // Adiciona a cor no elemento de parágrafo
    p.classList.add('text-color');
    // Adiciona a cor ao parágrafo
    p.textContent = newColor;
    // Adiciona o parágrafo à div
    box.appendChild(p);
    
  });
}