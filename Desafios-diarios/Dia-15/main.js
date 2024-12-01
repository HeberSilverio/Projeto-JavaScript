//Se cortar o cabelo com intervalos, quais os meses do ano não irá cortar?

function generateDates(startDate, intervalDays, count) {
  // Converter a data inicial em um objeto Date
  let currentDate = new Date(startDate);
  
  // Array para armazenar as datas
  let dates = [];
  
  // Gerar as datas
  for (let i = 0; i < count; i++) {
      dates.push(new Date(currentDate)); // Adicionar a data ao array
      currentDate.setDate(currentDate.getDate() + intervalDays); // Incrementar os dias
  }
  
  // Formatando e exibindo as datas
  dates.forEach(date => {
      console.log(
          `${date.getDate().toString().padStart(2, '0')}/` +
          `${(date.getMonth() + 1).toString().padStart(2, '0')}/` +
          `${date.getFullYear()}`
      );
  });
}

// Parâmetros
const startDate = "2024-11-07"; // Data inicial no formato YYYY-MM-DD
const intervalDays = 40; // Intervalo em dias
const count = 12; // Número de datas

generateDates(startDate, intervalDays, count);
