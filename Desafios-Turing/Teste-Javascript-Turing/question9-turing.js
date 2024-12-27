// Which operator and array functions would you use to complete the method of deleting customers by id? You can assume that all the customers have a unique id that can be a string or a number. The code should delete the customer by using case-sensitive id matching.

// Select the corret operator and array functions to replace ?? in the code block

// function deleteCustomerById(customers, value){
//    var index = customers.??((customers) => customers.id ?? value);
//    if (index > -1){
//       customers.??(index, 1);
//    }
//    return customers;
// }

// const customers = [
//    { id: 1, name: "Jhon" },
//    { id: "2", name: "Jack" },
//    { id: 2, name: "Jim" },
//    { id: 3, name: "Jhonny" },
//    { id: '3', name: "Julia" },
// ];

// deleteCustomerById(customers, '3');

function deleteCustomerById(customers, value) {
   // Localizar o índice do cliente cujo ID corresponda ao valor fornecido
   var index = customers.findIndex((customer) => customer.id === value);
   console.log("Índice encontrado:", index); // Depuração

   // Se o índice for válido (maior que -1), remover o cliente
   if (index > -1) {
      customers.splice(index, 1);
      console.log("Cliente removido:", customers); // Depuração
   }

   // Retornar o array atualizado
   return customers;
}

const customers = [
   { id: 1, name: "Jhon" },
   { id: "2", name: "Jack" },
   { id: 2, name: "Jim" },
   { id: 3, name: "Jhonny" },
   { id: "3", name: "Julia" },
];

// Chamar a função com o ID '3'
deleteCustomerById(customers, '3');
console.log("Array final:", customers); // Depuração
