function inicializarGraficos() {
  console.log("Inicializando gráficos...");

  Chart.register(ChartDataLabels);

  const labels = ['Design Digital', 'Eng. Software', 'Web I'];
  const notas = [8, 7, 9];
  const cores = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)'
  ];

  const criar = (id, tipo, extras = {}) => {
    const ctx = document.getElementById(id);
    if (!ctx) return;
    new Chart(ctx, {
      type: tipo,
      data: {
        labels,
        datasets: [{
          label: 'Notas',
          data: notas,
          backgroundColor: cores,
          borderColor: cores.map(c => c.replace('0.8', '1')),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: { color: '#000', font: { weight: 'bold' } },
          legend: { display: false },
          title: { display: true, text: `Gráfico ${tipo}` }
        },
        ...extras
      }
    });
  };

  criar('graficoNotas', 'bar', { scales: { y: { beginAtZero: true, max: 10 } } });
  criar('graficoBarra', 'bar', { indexAxis: 'y', scales: { x: { beginAtZero: true, max: 10 } } });
  criar('graficoPie', 'pie');
  criar('graficoRosca', 'doughnut');
  criar('graficoLinha', 'line', { scales: { y: { beginAtZero: true, max: 10 } } });
  criar('graficoRadar', 'radar');
}
