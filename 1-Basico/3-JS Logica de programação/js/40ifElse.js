const hora = 10;
if (hora >= 11 && hora <= 11) {
   console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
   console.log('Boa Tarde');
} else {
   console.log('Boa noite');
}

// If pode ser usado sozinho
// Sempre que utilizo a palavra else preciso de um if antes
// Eu posso ter vários else if's na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else
// Mais de um bloco verdadeiro dentro do else if só vai executar o primeiro e destruir o segundo