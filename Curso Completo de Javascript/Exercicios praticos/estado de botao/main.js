// let btn = document.querySelector("button");
// let txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Iniciar máquina") {
//     btn.textContent = "Parar máquina";
//     txt.textContent = "A máquina iniciou!";
//   } else {
//     btn.textContent = "Iniciar máquina";
//     txt.textContent = "A máquina está parada.";
//   }
// }


const codigoBase = 'SKU999';
// const codigoFormatado = codigoBase.replace(/^SKU(\d+)/, (_, numero) => 'SKU' + numero.padStart(4, '0'));
// console.log(codigoFormatado);


let numeroCapturado; // Declara a variável para armazenar o valor capturado

const codigoFormatado = codigoBase.replace(/^SKU(\d+)/, (_, numero) => {
    numeroCapturado = numero; // Atribui o valor de `numero` a `numeroCapturado`
    return 'SKU' + numero.padStart(4, '0'); // Continua com o formato desejado
});

console.log(codigoFormatado); // Exibe o código formatado, por exemplo, "SKU0001"
console.log(numeroCapturado); // Exibe o valor capturado, por exemplo, "1"

