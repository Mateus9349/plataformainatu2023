import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './style.css'

const PieChart = ({ gastos }) => {

  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          `Materia-prima: ${gastos.valor_materia_prima} R$`,
          `Mão de obra: ${gastos.mao_de_obra} R$`,
          `Depreciação: ${gastos.depreciacao} R$`,
          `Energia: ${gastos.energia} R$`,
          `Insumos: ${gastos.insumos} R$`],
        datasets: [
          {
            label: 'Gastos Produtivos',
            data: [gastos.valor_materia_prima, gastos.mao_de_obra, gastos.depreciacao, gastos.energia, gastos.insumos],
            backgroundColor: [
              '#be6a14',
              '#653024',
              '#00491e',
              '#9caf88',
              '#ffa400',
            ],
          },
        ],
      },
    });
  }, []);

  return (

    <section className='section-gastos'>
      <h1>Seus gastos produtivos</h1>
      <div className='grafico'>
        <canvas ref={chartRef} />
      </div>
    </section>

  );
};

export default PieChart;
