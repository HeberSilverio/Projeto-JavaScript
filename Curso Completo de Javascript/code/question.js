//You are getting sensor readings from a temperature sensor in degree celsius and you need to convert them to Fahrenheit. How would you parse those readings in JS replacing ?? so that the line bellow it will be able to convert those values to Fahrenheit?

//Assumption: Fahrenheit = Temperature in degree celsius

const sensorReading = [1, 2, 3, [null, 5, [4, 10], 89, "20", , [[[[, "96"]]]]]];
console.log('.push', sensorReading.push("Héber"), sensorReading);

const resposta = sensorReading.flat(Infinity);
console.log('.pop', resposta.pop(), resposta);
console.log('Resposta', resposta);
const respostaFilter = resposta.filter( (temp) => temp != null );
console.log('Filter', respostaFilter  );

// function convert() {
//   // Achata o array, remove valores nulos/indefinidos, e converte strings para números
//   const flatArray = sensorReading.flat(Infinity).filter((temp) => temp !== null && temp !== undefined).map(Number);
  
//   // Converte de Celsius para Fahrenheit
//   const mapped = flatArray.map((temperature) => (temperature * 9/5) + 32);
  
//   console.log(mapped);
// }

// convert();
