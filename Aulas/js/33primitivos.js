/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Os Valores serão copiados
*/
let a = 'A';
let b = a; // Cópia
console.log(a, b);
a = 'Outra coisa';
console.log(a, b); // b não depende de a e permanece com o valor armazenado inicialmente mesmo que o valor de a seja modificado.


/* 
Referência (mutável) - array, object, function // dados passados por referência apontam para o mesmo lugar na memória -  Os Valores serão passados por refência(aponta para o mesmo lugar)
*/
let c = [1, 2, 3];
let d = c; // d aponta para o mesmo local que c aponta na memória
console.log(c, d); //

c.push(4);
console.log(c, d); //tanto c quanto d foram afetados pela alteração

d.pop();
console.log(c, d); //tanto c quanto d foram afetados pela alteração