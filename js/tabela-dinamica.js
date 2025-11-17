function inicializarTabelaDinamica() {
  console.log("inicializarTabelaDinamica() chamada!");

  const tabela = document.getElementById("tabela-dinamica");
  if (!tabela) {
    console.warn("Tabela não encontrada no DOM.");
    return;
  }

  const tbody = tabela.querySelector("tbody");
  if (!tbody) {
    console.warn("<tbody> não encontrado na tabela.");
    return;
  }

  const dados = [
    { "id": 1, "data-tarefa": "06/10/2025", "tarefa": "estudar javascript", "situacao": "Tarefa Criada" },
    { "id": 2, "data-tarefa": "06/10/2025", "tarefa": "estudar javascript", "situacao": "Tarefa Agendada para", "tarefa-agendada": "07/10/2025", "hora-tarefa": "10:00" },
    { "id": 3, "data-tarefa": "06/10/2025", "tarefa": "Criar tabela Dinamica", "situacao": "Tarefa Criada" },
    { "id": 4, "data-tarefa": "06/10/2025", "tarefa": "Ir na faculdade", "situacao": "Tarefa Criada" },
    { "id": 5, "data-tarefa": "07/10/2025", "tarefa": "Ir na faculdade", "situacao": "Tarefa Criada" },
  ];

  tbody.innerHTML = "";

  dados.forEach((item) => {
    const tr = document.createElement("tr");

    // valores de agendamento
    const dataAg = item["tarefa-agendada"] || "—";
    const horaAg = item["hora-tarefa"] || "—";

    tr.innerHTML = `
      <td style="text-align:center;">
        <input type="checkbox" class="linha-check" data-id="${item.id}">
      </td>
      <td>${item["data-tarefa"]}</td>
      <td>${item.tarefa}</td>
      <td>${item.situacao}</td>
      <td>${dataAg}</td>
      <td>${horaAg}</td>
      <td style="text-align:center;">
        <button class="btn btn-warning btn-sm">Salvar</button>
        <button class="btn btn-warning btn-sm">Editar</button>
        <button class="btn btn-danger btn-sm">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  console.log("Tabela carregada com", dados.length, "itens.");
}
