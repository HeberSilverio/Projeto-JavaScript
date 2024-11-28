
Objeto bankAccount
let bankAccount = {
   accountNumber: "A458962361",
   customerId: "A1056932036",
   currentBalance: "5896036",
   isSelected: true,
   addressLine1: "Parkway Avenue",
   addressLine2: "United States",
   contactNumber: 90112569145,
};
Explicação:
Esse é um objeto literal.
Ele contém pares chave-valor que representam os dados de uma conta bancária.
accountNumber, customerId, etc., são chaves.
Os valores associados podem ser strings, números ou booleanos.
Propriedades como accountNumber e currentBalance armazenam informações específicas sobre a conta bancária.

Função sendToApi
function sendToApi() {
   fetch("http://example.com/")
   .then((response) => response.json())
   .then((data) => console.log(data)); 
}
Explicação:
fetch:

Faz uma requisição HTTP para um endpoint.
Aqui, está chamando "http://example.com/".
Retorna uma Promise, que é um objeto usado para tratar operações assíncronas.
.then((response) => response.json()):

O fetch retorna uma resposta que precisa ser processada.
O método .json() transforma a resposta em JSON (JavaScript Object Notation), que é o formato de dados mais usado para APIs.
.then((data) => console.log(data)):

Após processar a resposta, o dado é exibido no console.
A função sendToApi não tem retorno explícito.

Se você quiser enviar ou processar dados, é necessário incluir um POST ou PUT no fetch.
Desestruturação e Operador REST
const { isSelected: _, ...newObj } = bankAccount;
Explicação:
Desestruturação (const { isSelected: _, ...newObj }):

Desestruturação é uma forma de extrair valores ou propriedades de um objeto ou array.
Aqui, a propriedade isSelected é removida do objeto bankAccount.
A notação isSelected: _ é usada para "pegar" o valor, mas não utilizá-lo diretamente.
Operador REST (...newObj):

Coleta todas as propriedades restantes de bankAccount (exceto isSelected) em um novo objeto newObj.
O objeto resultante, newObj, conterá:
{
   accountNumber: "A458962361",
   customerId: "A1056932036",
   currentBalance: "5896036",
   addressLine1: "Parkway Avenue",
   addressLine2: "United States",
   contactNumber: 90112569145,
}
Reatribuição de sendToApi
sendToApi = (newObj);
Explicação:
Erro lógico:
Aqui, sendToApi está sendo reatribuído a um objeto newObj.
Isso sobrescreve a função original sendToApi, tornando-a inutilizável.
Após essa linha, sendToApi deixa de ser uma função e passa a ser um objeto.
Problemas no Código
Sobrescrição de Função:

Reatribuir sendToApi quebra a funcionalidade inicial.
Provavelmente, o objetivo era enviar newObj para a API, mas isso não foi implementado corretamente.
Falta de um Método HTTP (POST ou PUT):

O código faz um GET para o endpoint, mas não envia os dados de newObj para a API.
Correção Proposta
Se o objetivo é enviar newObj para a API usando um método POST, o código corrigido seria:

function sendToApi(newObj) {
   fetch("http://example.com/", {
       method: "POST", // Enviar dados
       headers: {
           "Content-Type": "application/json", // Informar que é JSON
       },
       body: JSON.stringify(newObj), // Serializar o objeto para JSON
   })
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => console.error("Error:", error)); // Tratar erros
}

// Criar o novo objeto sem `isSelected`
const { isSelected: _, ...newObj } = bankAccount;

// Enviar para a API
sendToApi(newObj);
Explicação da Solução Corrigida
fetch com POST:

Adicionamos o método POST e configuramos o cabeçalho para indicar o formato dos dados.
Enviamos newObj no corpo da requisição usando JSON.stringify.
Tratar erros com .catch:

Adicionamos um .catch para capturar e exibir erros durante a requisição.
Não sobrescrevemos sendToApi:

A função sendToApi mantém sua funcionalidade.