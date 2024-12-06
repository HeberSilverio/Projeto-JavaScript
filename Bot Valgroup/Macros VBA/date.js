// 1. diffDays(Dates)
// Calcula a diferença em dias entre duas datas fornecidas no formato dd/mm/yyyy;dd/mm/yyyy.

// Como funciona:
// Entrada: Uma string no formato "dd/mm/yyyy;dd/mm/yyyy".
// A string é dividida em duas datas (date1 e date2) com split(';').
// As datas são reformatadas de dd/mm/yyyy para mm/dd/yyyy porque o construtor Date no JavaScript trabalha melhor com o formato americano.
// Ambas as datas são convertidas para objetos Date.
// A diferença em milissegundos é calculada (t2 - t1).
// A diferença em dias é obtida dividindo por (24 * 3600 * 1000) e arredondando para baixo com Math.floor.
// Retorno: Um número representando o número de dias de diferença entre as duas datas.
// 2. diffMonths(Dates)
// Calcula a diferença em meses entre duas datas fornecidas no formato dd/mm/yyyy;dd/mm/yyyy.

// Como funciona:
// Entrada: Uma string no formato "dd/mm/yyyy;dd/mm/yyyy".
// As duas datas são separadas com split(';') e reformatadas para o formato mm/dd/yyyy.
// Ambas as datas são convertidas para objetos Date.
// Calcula a diferença de meses com a fórmula:
// months = date2.getMonth() - date1.getMonth();
// Adiciona a diferença de anos convertida em meses: months += (date2.getFullYear() - date1.getFullYear()) * 12;
// Retorno: Um número representando o número de meses de diferença.
// 3. dayNameOfTheWeek(Data)
// Retorna o nome do dia da semana de uma data no formato dd/mm/yyyy.

// Como funciona:
// Entrada: Uma string no formato "dd/mm/yyyy".
// A data é reformatada para mm/dd/yyyy e convertida para um objeto Date.
// Usa getDay() para obter o índice do dia da semana (0 = Domingo, 1 = Segunda...).
// O índice é usado para buscar o nome do dia em um array de nomes dos dias da semana.
// Retorno: O nome do dia da semana, como "Domingo" ou "Segunda".
// 4. dayOfTheWeek(Data)
// Retorna o índice do dia da semana de uma data no formato dd/mm/yyyy.

// Como funciona:
// Entrada: Uma string no formato "dd/mm/yyyy".
// A data é reformatada para mm/dd/yyyy e convertida para um objeto Date.
// Usa getDay() para obter o índice do dia da semana (0 = Domingo, 1 = Segunda...).
// Retorno: Um número entre 0 e 6 representando o dia da semana.
// 5. addDaysToDate(DateDaysToAdd)
// Adiciona um número de dias a uma data e retorna a data resultante formatada como dd/mm/yyyy.

// Como funciona:
// Entrada: Uma string no formato "dd/mm/yyyy;n", onde n é o número de dias a adicionar.
// A data é separada dos dias com split(';').
// A data é reformatada para mm/dd/yyyy e convertida para um objeto Date.
// Usa setTime() para adicionar os dias convertidos para milissegundos (days * 24 * 60 * 60 * 1000).
// Extrai o dia, mês e ano da data resultante:
// Garante que o dia/mês tenham dois dígitos ('0' + valor quando necessário).
// Retorno: Uma string no formato "dd/mm/yyyy" representando a nova data.


function diffDays(Dates){

  var y=Dates.split(';');
  var date1=y[0];
  var date2=y[1];

  var lst=date1.split('/');
  date1=lst[1]+'/'+lst[0]+'/'+lst[2];

  var lst=date2.split('/');
  date2=lst[1]+'/'+lst[0]+'/'+lst[2];

  var date1=new Date(date1);

  var date2=new Date(date2);

  var t1=date1.getTime();

  var t2=date2.getTime();

  var diffDays=Math.floor((t2-t1)/(24*3600*1000));


  return diffDays;

};


function diffMonths(Dates){
21
  var y=Dates.split(';');
22
  var date1=y[0];
23
  var date2=y[1];
24
  
25
  var lst=date1.split('/');
26
  date1=lst[1]+'/'+lst[0]+'/'+lst[2];
27
  var lst=date2.split('/');
28
  date2=lst[1]+'/'+lst[0]+'/'+lst[2];
29
  
30
  var date1=new Date(date1);
31
  var date2=new Date(date2);
32
  var months;
33
  months = date2.getMonth() - date1.getMonth();
34
  months = months + ((date2.getFullYear() - date1.getFullYear()) * 12);
35
  return months;  
36
};
37
​
38
function dayNameOfTheWeek(Data){
39
    var y=Data.split('/');
40
    var date=y[1]+'/'+y[0]+'/'+y[2];
41
    var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
42
    var x=new Date(date);
43
    var dia = days[x.getDay()];
44
    return dia;
45
};
46
​
47
function dayOfTheWeek(Data){
48
    var y=Data.split('/');
49
    var date=y[1]+'/'+y[0]+'/'+y[2];
50
    var x=new Date(date);
51
    x =x.getDay();
52
    return x;
53
};
54
​
55
function addDaysToDate(DateDaysToAdd){
56
  var lst=DateDaysToAdd.split(';');
57
  
58
  var y=lst[0].split('/');
59
  var date=y[1]+'/'+y[0]+'/'+y[2];
60
  date=new Date(date);
61
  
62
  var days=lst[1];
63
  
64
  var result =new Date(date);
65
  result.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
66
  var dia = result.getDate();
67
  if (dia<10){
68
      dia='0'+dia;
69
  }
70
  var mes = result.getMonth()+1;
71
  if (mes<10){
72
      mes='0'+mes;
73
  }
74
  var ano = result.getFullYear();
75
  var dataFormatada = dia+'/'+mes+'/'+ano;
76
  return dataFormatada;
}

console.log(diffDays("01/01/2023;15/01/2023")); // Saída: 14
console.log(diffMonths("01/01/2023;01/03/2023")); // Saída: 2
console.log(dayNameOfTheWeek("01/01/2023")); // Saída: "Domingo"
console.log(dayOfTheWeek("01/01/2023")); // Saída: 0 (Domingo)
console.log(addDaysToDate("01/01/2023;10")); // Saída: "11/01/2023"


// O que você pode estudar para entender melhor:
// Manipulação de strings:
// Métodos como split, join.
// Objetos Date:
// new Date(), getTime(), getDay(), setTime().
// Operações matemáticas:
// Uso de Math.floor e cálculos envolvendo milissegundos.
// Formatação de valores:
// Adicionar zeros à esquerda, como if (valor < 10) { "0" + valor }.



