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


// let numeroCapturado; // Declara a variável para armazenar o valor capturado

// const codigoFormatado = codigoBase.replace(/^SKU(\d+)/, (_, numero) => {
//     numeroCapturado = numero; // Atribui o valor de `numero` a `numeroCapturado`
//     return 'SKU' + numero.padStart(4, '0'); // Continua com o formato desejado
// });

// console.log(codigoFormatado); // Exibe o código formatado, por exemplo, "SKU0001"
// console.log(numeroCapturado); // Exibe o valor capturado, por exemplo, "1"


let s = "12:00:00PM";

const am = s.search("AM")
    const pm = s.search("PM")
    const timeText = s.split(":")
    
    if (am > 0) {
        if (timeText[0] === "12") {
            return "00:"+timeText[1]+":"+timeText[2].slice(0,2)
        }else {
            return s.slice(0, am)
        }
    } else if (pm > 0) {
        return (timeText[0] === "12" ? timeText[0] : parseInt(timeText[0])+12)+":"+timeText[1]+":"+timeText[2].slice(0,2)
    }
