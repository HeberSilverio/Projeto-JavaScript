// Question 7 of 15
// You are getting sensor readings from a temperature sensor in degree celsius and you need to convert them to Fahrenheit. How would you parse those readings in JS replacing ?? so that the line below it will be able to convert those values to Fahrenheit?

//Assumption: Fahrenheit = Temperature in degree celsius * 2;

const sensorReading = [1, 2, 3, [null, 5, [4, 10], 89, "20", , [[[[, "96"]]]]]];



function convert(){
   const flatArray = sensorReading.flat(3); //??
   const mapped = flatArray.map((temperature) => temperature * 2);
   console.log(mapped);
}
convert();