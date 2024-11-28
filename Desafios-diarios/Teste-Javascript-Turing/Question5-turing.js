// You are working on an enterprise project for a bank. You have been assigned to the Customer Account module that deals with managing the bank accounts of customers. The API contract to send customer details allows fields such as accountNumber, customerId, currentBalance, addressLine1, addressLine2, and contactNumber. However, in the frontend, while you were creating the request body you encountered an additional key which is important to maintain the state on the frontend. You need to make a decision to identify the best way to remove the extra field by replacing ?? to create a request body for the API.


let bankAccount = {
   accountNumber: "A458962361",
   customerId: "A1056932036",
   currentBalance: "5896036",
   isSelected: true,
   addressLine1: "Parkway Avenue",
   addressLine2: "United States",
   contactNumber: 90112569145,
};

function sendToApi() {
   fetch("http://example.com/")
   .then((response) => response.json())
   .then((data) => console.log(data)); 
}

const { isSelected: _, ...newObj } = bankAccount;
sendToApi=(newObj);


