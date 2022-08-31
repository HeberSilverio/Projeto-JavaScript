function criaPessoa(nome, sobrenome, a, p) {
   return {
      nome,
      sobrenome,

      //getter
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`;
      },

      // Setter
      set nomeCompleto(valor) {
         valor = valor.split(' ');
         this.nome = valor.shift();
         this.sobrenome = valor.join(' ');
         console.log(valor);
      },

      fala(assunto = 'falando sobre NADA') {
         return `${this.nome} está ${assunto}.`;
      },
      altura: a,
      peso: p,

      get imc() {
         const indice = this.peso / (this.altura ** 2);
         return indice.toFixed(2);
      }
   };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria oliveira Silva'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());