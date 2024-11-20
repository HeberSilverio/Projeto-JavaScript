function towerBreakers(n: number, m: number): number {
   // Caso trivial: se as torres têm altura 1, jogador 2 vence
   if (m === 1) {
       return 2;
   }

   // Se o número de torres for par, jogador 2 vence
   if (n % 2 === 0) {
       return 2;
   }

   // Caso contrário, jogador 1 vence
   return 1;
}
