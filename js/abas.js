// $(document).ready(function () {
//   carregarAba('abertura');

//   $('a[data-toggle="tab"]').on('click', function (e) {
//     e.preventDefault();
//     const abaId = $(this).attr('href').replace('#', '');
//     carregarAba(abaId);
//   });
// });

// function carregarAba(nome) {
//   fetch(`abas/${nome}.html`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Erro ${res.status}`);
//       return res.text();
//     })
//     .then(html => {
//       const container = document.getElementById(nome);
//       if (!container) return;
//       container.innerHTML = html;

//       // Chama a função de inicialização específica da aba
//       switch (nome) {
//         case 'carrossel':
//           if (typeof inicializarCarrossel === 'function') {
//             inicializarCarrossel();
//             console.log("✅ Carrossel inicializado com sucesso!");
//           } else {
//             console.warn("⚠️ Função inicializarCarrossel não encontrada.");
//           }
//           break;
//       }
//     })
//     .catch(err => console.error(`Erro ao carregar ${nome}:`, err));
// }

$(document).ready(function () {
  carregarAba('abertura'); // abre a aba inicial

  $('a[data-toggle="tab"]').on('click', function (e) {
    e.preventDefault();
    const abaId = $(this).attr('href').replace('#', '');
    carregarAba(abaId);

    $('a[data-toggle="tab"]').removeClass('active');
    $(this).addClass('active');
  });
});

function carregarAba(nome) {
  fetch(`abas/${nome}.html`)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      return res.text();
    })
    .then(html => {
      const container = document.getElementById(nome);
      if (!container) return;

      container.innerHTML = html;

      // Chama função específica de cada aba
      switch (nome) {
        case 'carrossel':
          if (typeof inicializarCarrossel === 'function') inicializarCarrossel();
          break;
        // case 'tabela':
        //   if (typeof inicializarTabela === 'function') inicializarTabela();
        //   break;

        case 'tabela-dinamica':
          if (typeof inicializarTabelaDinamica === 'function') inicializarTabelaDinamica();
          break;

        case 'graficos':
          if (typeof inicializarGraficos === 'function') inicializarGraficos();
          break;

        case 'projeto':
          if (typeof inicializarProjeto === 'function') inicializarProjeto();
          break;
      }
    })
    .catch(err => console.error(`Erro ao carregar ${nome}:`, err));
}
