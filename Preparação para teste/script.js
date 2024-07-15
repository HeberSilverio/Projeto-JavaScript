'use strict';

console.log(window)
console.log(window.location)
console.log(window.location.href)

// Declaração da função teste
function teste() {
  let selection = document.querySelector('#captchaImage') !== null;
  if (selection) {
      return true;
  } else {
      return false;
  }
}

// Declaração e inicialização da variável retornaAA com o resultado da função teste
let retornaAA = teste();

// Uso da variável retornaAA conforme necessário
console.log(retornaAA);

document.getElementById("ctl00_conteudoPaginaPlaceHolder_filtroTabContainer_filtroEmitirCertidaoTabPanel_imagemDinamica").getAttribute('src');

let elemento = document.querySelector('#ctl00_conteudoPaginaPlaceHolder_filtroTabContainer_filtroEmitirCertidaoTabPanel_imagemDinamica');
let src = elemento.getAttribute('src');
elemento.setAttribute('aria-valuetext', src);

document.getElementById('inputEmail').a
document.getElementById('inputEmail').value='user@automation.com';
document.querySelector('.btn-primary').click();


const minhaImagem = document.getElementById("ctl00_conteudoPaginaPlaceHolder_filtroTabContainer_filtroEmitirCertidaoTabPanel_imagemDinamica");