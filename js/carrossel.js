// function inicializarCarrossel() {
//   console.log("Iniciando carrossel...");

//   // ===== Carrossel 1: três cards =====
//   const tarefas = document.getElementById('tarefas');
//   if (!tarefas) {
//     console.warn("Elemento #tarefas não encontrado!");
//     return;
//   }

//   const cards = tarefas.querySelectorAll('.tarefa');
//   const indicadores = document.querySelectorAll('#indicadores .bolinha');

//   let indiceAtual = 0;
//   const totalSlides = Math.ceil(cards.length / 3);

//   function atualizarCarrossel() {
//     cards.forEach(card => card.classList.remove('ativa'));
//     const inicio = indiceAtual * 3;
//     const fim = inicio + 3;
//     for (let i = inicio; i < fim && i < cards.length; i++) {
//       cards[i].classList.add('ativa');
//     }
//     indicadores.forEach((b, i) => b.classList.toggle('ativa', i === indiceAtual));
//   }

//   atualizarCarrossel();

//   indicadores.forEach((b, i) => {
//     b.addEventListener('click', () => {
//       indiceAtual = i;
//       atualizarCarrossel();
//       reiniciarAutoPlay1();
//     });
//   });

//   let intervalo1;
//   function iniciarAutoPlay1() {
//     intervalo1 = setInterval(() => {
//       indiceAtual = (indiceAtual + 1) % totalSlides;
//       atualizarCarrossel();
//     }, 4000);
//   }
//   function reiniciarAutoPlay1() {
//     clearInterval(intervalo1);
//     iniciarAutoPlay1();
//   }
//   iniciarAutoPlay1();

//   // ===== Carrossel 2: um card =====
//   const tarefas2 = document.getElementById('tarefas-tsc');
//   if (!tarefas2) {
//     console.warn("Elemento #tarefas-tsc não encontrado!");
//     return;
//   }

//   const cards2 = tarefas2.querySelectorAll('.tc');
//   const indicadoresContainer2 = document.getElementById('indicadores-inds');
//   indicadoresContainer2.innerHTML = "";

//   let indiceAtual2 = 0;
//   const totalSlides2 = cards2.length;

//   for (let i = 0; i < totalSlides2; i++) {
//     const span = document.createElement('span');
//     span.classList.add('bolinha', 'bl');
//     if (i === 0) span.classList.add('ativa');
//     indicadoresContainer2.appendChild(span);
//   }

//   const indicadores2 = indicadoresContainer2.querySelectorAll('.bl');

//   function atualizarCarrossel2() {
//     cards2.forEach(card => card.classList.remove('ativa'));
//     cards2[indiceAtual2].classList.add('ativa');
//     indicadores2.forEach((b, i) => b.classList.toggle('ativa', i === indiceAtual2));
//   }

//   atualizarCarrossel2();

//   indicadores2.forEach((b, i) => {
//     b.addEventListener('click', () => {
//       indiceAtual2 = i;
//       atualizarCarrossel2();
//       reiniciarAutoPlay2();
//     });
//   });

//   let intervalo2;
//   function iniciarAutoPlay2() {
//     intervalo2 = setInterval(() => {
//       indiceAtual2 = (indiceAtual2 + 1) % totalSlides2;
//       atualizarCarrossel2();
//     }, 4000);
//   }
//   function reiniciarAutoPlay2() {
//     clearInterval(intervalo2);
//     iniciarAutoPlay2();
//   }
//   iniciarAutoPlay2();
// }

function inicializarCarrossel() {
  console.log("🎠 Carrossel inicializado!");

  const tarefas = document.getElementById('tarefas');
  if (!tarefas) {
    console.warn("⚠️ Elemento #tarefas não encontrado no DOM ainda.");
    return;
  }

  const cards = tarefas.querySelectorAll('.tarefa');
  const indicadores = document.querySelectorAll('#indicadores .bolinha');

  if (cards.length === 0 || indicadores.length === 0) {
    console.warn("⚠️ Nenhum card ou indicador encontrado.");
    return;
  }

  let indiceAtual = 0;
  const totalSlides = Math.ceil(cards.length / 3);

  function atualizarCarrossel() {
    cards.forEach(card => card.classList.remove('ativa'));
    const inicio = indiceAtual * 3;
    const fim = inicio + 3;
    for (let i = inicio; i < fim && i < cards.length; i++) {
      cards[i].classList.add('ativa');
    }
    indicadores.forEach((b, i) => b.classList.toggle('ativa', i === indiceAtual));
  }

  atualizarCarrossel();

  indicadores.forEach((b, i) => {
    b.addEventListener('click', () => {
      indiceAtual = i;
      atualizarCarrossel();
      reiniciarAutoPlay1();
    });
  });

  let intervalo1;
  function iniciarAutoPlay1() {
    intervalo1 = setInterval(() => {
      indiceAtual = (indiceAtual + 1) % totalSlides;
      atualizarCarrossel();
    }, 4000);
  }

  function reiniciarAutoPlay1() {
    clearInterval(intervalo1);
    iniciarAutoPlay1();
  }

  iniciarAutoPlay1();

  // ===== Segundo carrossel (um card por vez) =====
  const tarefas2 = document.getElementById('tarefas-tsc');
  const indicadoresContainer2 = document.getElementById('indicadores-inds');
  if (!tarefas2 || !indicadoresContainer2) return;

  const cards2 = tarefas2.querySelectorAll('.tc');
  if (cards2.length === 0) return;

  indicadoresContainer2.innerHTML = "";
  for (let i = 0; i < cards2.length; i++) {
    const span = document.createElement('span');
    span.classList.add('bolinha', 'bl');
    if (i === 0) span.classList.add('ativa');
    span.dataset.index = i;
    indicadoresContainer2.appendChild(span);
  }

  const indicadores2 = indicadoresContainer2.querySelectorAll('.bl');
  let indiceAtual2 = 0;

  function atualizarCarrossel2() {
    cards2.forEach(card => card.classList.remove('ativa'));
    cards2[indiceAtual2].classList.add('ativa');
    indicadores2.forEach((b, i) => b.classList.toggle('ativa', i === indiceAtual2));
  }

  atualizarCarrossel2();

  indicadores2.forEach((b, i) => {
    b.addEventListener('click', () => {
      indiceAtual2 = i;
      atualizarCarrossel2();
      reiniciarAutoPlay2();
    });
  });

  let intervalo2;
  function iniciarAutoPlay2() {
    intervalo2 = setInterval(() => {
      indiceAtual2 = (indiceAtual2 + 1) % cards2.length;
      atualizarCarrossel2();
    }, 4000);
  }

  function reiniciarAutoPlay2() {
    clearInterval(intervalo2);
    iniciarAutoPlay2();
  }

  iniciarAutoPlay2();
}
