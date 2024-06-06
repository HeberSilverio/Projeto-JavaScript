const text = document.getElementById('heading');

const prog = "Code is like humor. If I have to explain it, it's because it's terrible. 😂";
let idx = 1;
let intervalId = setInterval(writeText, 150);

function writeText() {
    text.innerText = prog.slice(0, idx);

    idx++;

    if (idx > prog.length) {
        clearInterval(intervalId); // Limpa o intervalo
        setTimeout(() => { // Define um atraso de 3 segundos
            idx = 1;
            intervalId = setInterval(writeText, 150); // Reinicia o intervalo
        }, 3000);
    }
}