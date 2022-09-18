// PROBLEMA
// Perguntar o nome do usuário e mostrar mensagem de boas-vindas

const nome = prompt('Digite o seu nome');
alert('Bem vindo, ' + nome);

const cupom = document.querySelector('.promocao');

cupom.innerHTML += `<p>${nome}, você é um cliente especial, por isso reservamos uma promoção exclusiva! </p>`