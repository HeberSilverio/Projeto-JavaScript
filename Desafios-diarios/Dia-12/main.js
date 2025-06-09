document.addEventListener('DOMContentLoaded', function() {
  const cardContent = document.querySelector('.card__content'); // Seleciona a div pai
  const btn = document.getElementById('btnNao'); // Assume que você tem um botão com id 'btnNao'

  btn.addEventListener('mouseover', function() {
      // Obtém as dimensões e posição da div pai
      const contentRect = cardContent.getBoundingClientRect();

      // Define os limites máximos para a nova posição do botão dentro da div pai
      const maxX = contentRect.width - btn.offsetWidth;
      const maxY = contentRect.height - btn.offsetHeight;

      // Gera uma nova posição aleatória dentro dos limites da div pai
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      // Aplica a nova posição ao botão, ajustando com a posição da div pai
      btn.style.position = 'absolute';
      // Define a posição horizontal do botão em relação à div pai, considerando o deslocamento da janela
      btn.style.left = `${contentRect.left + window.scrollX + newX}px`;

      // Define a posição vertical do botão em relação à div pai, considerando o deslocamento da janela
      
      btn.style.top = `${Math.min(contentRect.top + window.scrollY + newY, 380)}px`;
  });
});

document.getElementById('btnSim').addEventListener('click', function() {
  // Muda a classe do botão
  this.classList.remove('btn-primary');
  this.classList.add('btn-success');

    // Seleciona a div onde o ícone será adicionado

  const iconDiv = document.getElementById('icon');

  // Verifica se já há um ícone e remove antes de adicionar outro

  const existingIcon = iconDiv.querySelector('lord-icon');

  if (existingIcon) {

    existingIcon.remove();

  }

  // Cria o elemento lord-icon
  var lordIcon = document.createElement('lord-icon');
  lordIcon.setAttribute('src', 'https://cdn.lordicon.com/gqjpawbc.json');
  lordIcon.setAttribute('trigger', 'hover');
  lordIcon.style.width = '190px';
  lordIcon.style.height = '190px';

  // Esconde o botão 'Não'
  document.getElementById('btnNao').style.display = 'none';

  // Adiciona o lord-icon à div com id 'icon'
  document.getElementById('icon').appendChild(lordIcon);

  // Inicia o efeito de aumentar e diminuir o tamanho da imagem com id 'coracao'
  const coracao = document.getElementById('coracao'); // Seleciona a imagem pelo ID
  let growing = true;
  const intervalId = setInterval(() => {
    if (growing) {
      coracao.style.transform = 'scale(1.09)'; // Aumenta o tamanho em 5%
    } else {
      coracao.style.transform = 'scale(1)'; // Retorna ao tamanho original
    }
    growing = !growing;
  }, 500);
});