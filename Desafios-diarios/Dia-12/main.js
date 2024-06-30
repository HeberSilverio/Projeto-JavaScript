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