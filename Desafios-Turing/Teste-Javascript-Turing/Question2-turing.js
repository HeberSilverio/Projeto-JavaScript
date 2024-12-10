//You are working on an enterprise project for a bank. you have been assigned with Account Type module that deals with managing account types of customers. Account types can be Normal, Gold or Prefered. Which of the following is the most appropriate for this code block that you wrote in JavaScript?

// class BankAccount {
//    changeAccountType(accountType) {
//       this.newAccountType = accountType;
//       return this.newAccountType;
//    }
//    constructor({ newAccountType = "Normal" } = {}) {
//       this.newAccountType = newAccountType;
//    }
// }

// const customers = new BankAccount({ newAccountType: "Gold" });
// console.log(customers.changeAccountType("Prefered"));

function xor (a, b) {
   return a ^ b
}

//console.log(xor(5,1) );

// function lonelyinteger(a) {
//    let result = 0; // Inicializa o resultado com 0
   
//    // Faz XOR de todos os elementos do array
//    for (let i = 0; i < a.length; i++) {
//        result ^= a[i]; // Aplica XOR entre result e o elemento a[i]
//    }
   
//    return result; // Retorna o número que aparece apenas uma vez
// }
const a = [1,2,3,4,3,2,1]
function lonelyinteger(a) {
   // Write your code here
   return a.reduce((acc, num) => acc ^ num, 0);
}

const solitario = lonelyinteger(a);
//console.log(solitario);

//console.log(xor(5,1) );

//Reduce( (accumulator, currentValue) => { return accumulator }, 0) 
const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Saída: 15

const sum = numbers.reduce((accumulator, currentValue) => {
   return accumulator * 2;
 }, 0);
 
 console.log(sum); // Saída: 15

