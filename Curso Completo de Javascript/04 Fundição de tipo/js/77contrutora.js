// Função construtora -> constroi objetos
// Função fabrica -> fabrica objetos
// Função construtora Pessoa (new)
class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }
}

const p1 = new Pessoa('Luiz', 'Henrique');
const p2 = new Pessoa('Maria', 'Oliveira');
console.log(p1, p2)