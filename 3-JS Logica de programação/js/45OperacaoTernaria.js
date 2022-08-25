// (condição) ? 'Valor para verdaeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;

const nivelUsuario = (pontuacaoUsuario >= 1000) ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

// outra possibilidade é 
let corUsuario = null;
corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);