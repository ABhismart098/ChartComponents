
import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import io from 'socket.io-client';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const socket = io('http://localhost:3001');

const ChartComponent = ({ chartType, customizationOptions }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Data',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    socket.on('updateChartData', (newData) => {
      setData(newData);
    });

  
    const generateRandomData = () => {
      const randomLabels = Array.from({ length: 5 }, (_, i) => `Label ${i + 1}`);
      const randomData = randomLabels.map(() => Math.floor(Math.random() * 100));
      setData({
        labels: randomLabels,
        datasets: [
          {
            label: 'Data',
            data: randomData,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      });
    };

   
    generateRandomData();


    const intervalId = setInterval(() => {
      generateRandomData();
    }, 5000);

    return () => {
      socket.off('updateChartData');
      clearInterval(intervalId);
    };
  }, []);

  const options = {
    scales: {
      x: { ...customizationOptions.xAxis },
      y: { ...customizationOptions.yAxis },
    },
  };

  const Chart = chartType === 'bar' ? Bar : Line;

  return <Chart data={data} options={options} />;
};

export default ChartComponent;
