import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Predictions Made',
      data: [3, 8, 15, 12, 20],
      fill: false,
      borderColor: '#3b82f6',
      tension: 0.4,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
