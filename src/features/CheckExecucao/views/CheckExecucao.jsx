import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { retornaSegundoItem, substituirScoreCE, filtrarScoresCE } from '../CheckExecucaoUtils'

export const CheckExecucao = props => {
  const scores = filtrarScoresCE(props);
  const categories = substituirScoreCE(scores);
  const data = retornaSegundoItem(scores);
  return (
    <ReactApexCharts
      options={{
        chart: {
          height: '20%',
          type: 'radar',
          background: 'rgba(41, 40, 61, 0)'
        },
        colors: ['#57bb8a'],
        fill: {
          colors: ['#57bb8a'],
          opacity: 0.9
        },
        theme: {
          mode: 'dark',
          palette: 'palette8'
        },
        xaxis: {
          categories: categories,
          labels: {
            show: true
          }
        }
      }}
      series={[
        {
          name: '',
          data: data
        }
      ]}
      type="radar"
      height={500}
    />
  );
};

export default CheckExecucao;

