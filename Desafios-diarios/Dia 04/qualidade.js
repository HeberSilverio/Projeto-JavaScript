let qualidades = ['fé'];
qualidades.push('virtude');
qualidades.push('conhecimento');
qualidades.push('domínio próprio');
qualidades.push('perseverança');
qualidades.push('piedade');
qualidades.push('fraternidade');
qualidades.push('amor');

// Array de cores
let cores = ["primary", "info", "success", "info", "warning", "danger", "dark", "light"];

// Função para criar um novo botão
function criarBotao(texto, cor) {
  let btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-" + cor;
  btn.innerHTML = texto + ' <span class="badge text-bg-secondary">+</span>';
  btn.onclick = function() {
      if (qualidades.length > 0) {
          criarBotao(qualidades.shift(), cores.shift());
      } else {
          // Cria a div
          let div = document.createElement("div");
          div.id = "resultado";
          div.className = "alert alert-success resultado";
          div.role = "alert";
          div.innerText = "1 Pedro 1:4-5 - 4 Para uma herança incorruptível, incontaminável, e que não se pode murchar, guardada nos céus para vós, 5 Que mediante a fé estais guardados na virtude de Deus para a salvação, já prestes para se revelar no último tempo,";
          div.style.display = "none"; // Inicialmente esconde a div
          document.getElementById("qualidades").appendChild(div);

          // Alterando a propriedade de exibição para tornar a div visível
          document.getElementById("resultado").style.display = "block";
      }
  };
  document.getElementById("qualidades").appendChild(btn);
}

// Cria o primeiro botão
criarBotao(qualidades.shift(), cores.shift());
