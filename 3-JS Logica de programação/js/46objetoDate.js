// const data = new Date(0); // 01/01/1970 Timestamp unix, ou época unix

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 *1000;
// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString());


// const dataAgora = new Date();
// console.log(dataAgora.toString());

// calcula quanto tempo faz o marco zero
// const marcoZero = dataAgora - data;
// console.log(marcoZero.toString());

// const hoje = new Date(2022, 7, 26, 3, 20, 20); // A, M, D, h, min, seg, ms - em number
// console.log(hoje.toString());
// const data = new Date('1985-10-19 22:01:02.100');
// console.log('Dia', data.getDate());
// console.log('mês', data.getMonth()); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('seg', data.getSeconds());
// console.log('mileSeg', data.getMilliseconds());
// console.log('dia da semana', data.getDay()); // dia da semana 0 é domingo e 6 é sabado
// console.log('mileSeg do marco zero até hoje:', Date.now());

function zeroAEsquerda (num) {
   return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const segundos = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${min}:${segundos}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);