//OBJETO
const pessoa1 = {
   nome: 'Luiz',
   sobrenome: 'Miranda',
   idade: 25,

   fala() { // Quando uma função está dentro de um objeto é chamado de método
      console.log(`${this.nome} ${this.sobrenome} está falando oi... A minha idade atual é ${this.idade}.`);
   },

   incrementaIdade() {
      this.idade++;
   }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


//Função para criar objeto
// function criaPessoa (nome, sobrenome, idade) {
//    return { nome, sobrenome, idade };
// }
// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);

// console.log(pessoa1.nome, pessoa1.sobrenome);