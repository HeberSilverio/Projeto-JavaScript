No código, foi sugerido usar flat(3) para achatar a estrutura do array sensorReading em até 3 níveis de profundidade. Vamos analisar o porquê dessa escolha e discutir sobre a possibilidade de usar flat(5) ou mesmo flat(Infinity) para achatar todos os níveis.

Estrutura de sensorReading
O array inicial é:

const sensorReading = [
  1, 
  2, 
  3, 
  [null, 5, [4, 10], 89, "20", , [[[[, "96"]]]]]
];
A estrutura possui múltiplos níveis de aninhamento:

O nível externo contém números (1, 2, 3) e um array aninhado:
[null, 5, [4, 10], 89, "20", , [[[[, "96"]]]]]
Dentro deste array, existem:
Elementos simples (null, 5, 89, "20");
Um array aninhado ([4, 10]);
Outro array mais profundo ([[[[, "96"]]]]).
O que faz flat(n)?
O método .flat(n) achata um array até n níveis de profundidade:

flat(1) remove um nível de aninhamento.
flat(2) remove até dois níveis de aninhamento.
flat(Infinity) remove todos os níveis, deixando o array completamente achatado, independentemente da profundidade.
Por que usar flat(3)?
Observação da profundidade do array:

O array sensorReading tem um aninhamento máximo de 3 níveis que contêm elementos relevantes para o cálculo:

Primeiro nível: [null, 5, [4, 10], 89, "20", , [[[[, "96"]]]]]
Segundo nível: [4, 10] e [[[[, "96"]]]]
Terceiro nível: [[[, "96"]]]
Usar flat(3) é suficiente para tornar todos os valores acessíveis em um único array:

[1, 2, 3, null, 5, 4, 10, 89, "20", "96"]
Performance e controle:

Limitar o achatamento a 3 níveis é mais eficiente do que usar flat(Infinity), especialmente se você sabe que os dados relevantes estão dentro dessa profundidade.
Usar flat(5) seria desnecessário neste caso, já que não existem níveis adicionais além de 3 com elementos úteis.
O que aconteceria com flat(5) ou flat(Infinity)?
Usar flat(5) ou flat(Infinity) também funcionaria, mas não traria benefícios adicionais, pois o array já estará completamente achatado após flat(3).
No caso de arrays muito grandes e profundos, usar flat(Infinity) pode consumir mais recursos computacionais, mesmo quando desnecessário.
Resultado do Código
Após o achatamento com flat(3), o array resultante é:

[1, 2, 3, null, 5, 4, 10, 89, "20", "96"];
O map multiplica cada elemento por 2:

const mapped = flatArray.map((temperature) => temperature * 2);
Para números: o valor é dobrado.
Para null ou strings que não podem ser convertidas em números, o resultado será NaN.
O console exibirá:

[2, 4, 6, NaN, 10, 8, 20, 178, 40, NaN];
Conclusão
Usar flat(3) foi sugerido porque:

É suficiente para achatar todos os níveis relevantes do array sensorReading.
Garante eficiência, evitando processamento desnecessário em arrays mais profundos.
Se não soubermos a profundidade exata ou quisermos garantir o achatamento completo para qualquer estrutura, poderíamos usar flat(Infinity).