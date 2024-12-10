Your are the backend developer for an enterprise bank project. Within this, you are assigned the task to sort the bank account by their balances. However, during the program execution flow you want to ensure that the code not modify the customer details. You tried Object.freeze but it is not throwing an error when a developer is modifying the bank account details such as balance. What is missing here?

Você é o desenvolvedor backend de um projeto de banco empresarial. Dentro disso, você tem a tarefa de classificar a conta bancária por seus saldos. No entanto, durante o fluxo de execução do programa, você quer garantir que o código não modifique os detalhes do cliente. Você tentou Object.freeze, mas ele não está gerando um erro quando um desenvolvedor está modificando os detalhes da conta bancária, como saldo. O que está faltando aqui?

Opção D: Explica que objetos congelados dentro de um array não lançarão erros se modificados, pois freeze apenas congela o objeto, não os objetos referenciados.

Isso está correto. Object.freeze não congela propriedades aninhadas, então balance ainda pode ser modificado, pois o congelamento não é profundo.
