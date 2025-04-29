const htmlText = $input.first().json.textAsHtml; // supondo que o HTML esteja no campo 'html'

// Remove todas as tags HTML manualmente
const plainText = htmlText
  .replace(/<br\s*\/?>/gi, '\n') // converte <br> para quebra de linha
  .replace(/<\/p>/gi, '\n')      // converte </p> para quebra de linha
  .replace(/<[^>]+>/g, '')       // remove qualquer outra tag HTML
  .replace(/&nbsp;/g, ' ')       // converte &nbsp; para espaço
  .replace(/&[a-z]+;/gi, '');    // remove outras entidades HTML tipo &ccedil;

// Agora tratamos como texto puro
const startIndex = plainText.indexOf('TransactionType');
if (startIndex === -1) {
  throw new Error('Nenhuma tabela de transações encontrada.');
}

const transactionsText = plainText.substring(startIndex);

// Divide as transações
const transactionParts = transactionsText
  .replace(/(\r\n|\n|\r)/gm, ' ') // remove quebras de linha
  .split('ProcessamentoPedido')
  .slice(1); // remove cabeçalho

const output = transactionParts.map(part => {
  const fields = part.trim().split(/\s+/);
  return {
    json: {
      TransactionType: "ProcessamentoPedido",
      TransactionId: fields[0] || '',
      TransactionStatus: fields[1] || '',
      TransactionExceptionType: fields[2] || '',
      TransactionExceptionDescription: fields.slice(3).join(' ') || ''
    }
  };
});

return output;
