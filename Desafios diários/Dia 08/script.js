function shuffle() {
  const imgs = document.querySelectorAll('img');
  let random = Math.floor(Math.random() * 6) + 1;

  imgs.forEach((img) => {
    img.setAttribute('src', `assets/${random}.png`);
  });
}

function animate() {
  const img = document.getElementById('img');
  img.setAttribute('src', 'assets/dice-rol.gif');

  // Após 500ms, chama a função shuffle
  setTimeout(shuffle, 800);
}

document.getElementById('btn').addEventListener('click', animate);