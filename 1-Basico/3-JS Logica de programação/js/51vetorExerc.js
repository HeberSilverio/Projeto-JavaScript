v = [, 5, 1, 4, 2, 7, 8, 3, 6];

console.log(v);

for (let i = 8; i >= 5; i--) {
   let aux = v[i];
   v[i] = v[8 - i + 1];
   v[8 - i + 1] = aux;
}

console.log(v);