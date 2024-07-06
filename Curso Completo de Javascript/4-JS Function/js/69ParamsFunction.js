function somar() {
   let total = 0;
   for (let argumento of arguments) {
      total += argumento;
   }
   console.log(total);
}
somar(1,2,3,4,5,6,7);
