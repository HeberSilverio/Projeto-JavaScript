"Depure o aplicativo em tempo de execução" em JavaScript refere-se ao processo de identificar e corrigir erros enquanto o código está sendo executado. Isso significa que você pode examinar o funcionamento do aplicativo linha por linha, verificar o valor das variáveis e entender o fluxo lógico para encontrar e corrigir problemas.

Aqui estão algumas técnicas e ferramentas comuns para depuração em tempo de execução em JavaScript:

1. Console do Navegador
A maioria dos navegadores, como Chrome e Firefox, possui ferramentas de desenvolvedor que incluem um console para visualizar mensagens, erros e avisos.
Você pode usar console.log() para imprimir valores no console e verificar se estão corretos em diferentes pontos do código.
2. Breakpoints (Pontos de Interrupção)
Nos navegadores, você pode definir "breakpoints" (ou pontos de interrupção) no código. Quando o código atinge um desses pontos, ele pausa a execução e permite que você examine o estado do aplicativo.
Isso é útil para ver o valor das variáveis e o comportamento do código em diferentes partes.
3. Ferramentas de Debugging
Ferramentas como o Debugger no Chrome DevTools permitem que você analise o código em tempo de execução, observe o fluxo do programa e execute o código linha por linha.
Você também pode ver o histórico das chamadas (call stack), o que ajuda a entender como uma função foi chamada e como o controle fluiu até aquele ponto.
4. Depurador (debugger Statement)
A palavra-chave debugger em JavaScript pode ser colocada em qualquer parte do código. Quando o interpretador a encontra, ele pausa a execução (se o console de depuração estiver aberto), permitindo que você inspecione o estado atual do aplicativo.
Exemplo:

function soma(a, b) {
    debugger; // A execução vai pausar aqui, permitindo inspecionar os valores de a e b
    return a + b;
}

soma(5, 10);

1. How do you describe the proper error handling using try ... catch ... finally blocks?

Alternativa A: "Proper error handling allows code processing to continue and to provide appropriate user feedback."
Essa alternativa está correta, pois o uso de try...catch...finally permite que o código continue executando de maneira controlada, mesmo após um erro, e fornece a oportunidade de dar feedback apropriado ao usuário.
