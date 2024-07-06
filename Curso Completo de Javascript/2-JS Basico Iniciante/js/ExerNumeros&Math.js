const numero = Number(prompt('Digite um número e veja a mágica!'));


const numeroTitulo = document.getElementById('numero-digitado');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada do seu número é ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>Este número é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Este número é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Este número é arredondado para baixo é: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Este número é arredondado para cima é: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Este número é com duas casas decimais é: ${numero.toFixed(2)}.</p>`;