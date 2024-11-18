// How would you replace the line with ?? to ensure that the error thrown from the try block of the server method is preserved along with the method name? Choose the best possible option.

const billDetails = [
   {
      billId: "OP908",
      billAmount: 58960,
      billDiscount: 5,
      date: new Date("02-02-2023"),
   },
   {
      billId: "OP876",
      billAmount: 7813,
      billDiscount: 2.5,
      date: new Date("03-02-2023"),
   },
   {
      billId: "OP908",
      billAmount: 0,
      billDiscount: 0,
      date: new Date("09-02-2023"),
   },
];

function server(index) {
   try {
      server(3);
   } catch (exception) {

      //Resposta correta: Opção D, pois cause é a maneira padrão para associar o erro original ao encapsulá-lo em um novo erro, conforme o ECMAScript.

      throw new Error("Method: Server", { cause: error });
      console.log(`${exception.message} ${exception.cause}`);


   }
}