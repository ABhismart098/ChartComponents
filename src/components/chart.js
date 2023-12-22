
// // // import React, { useEffect, useState } from 'react';
// // // import { Bar, Line } from 'react-chartjs-2';
// // // import io from 'socket.io-client';

// // // const socket = io('http://localhost:3001'); // Replace with your server URL

// // // const ChartComponent = ({ chartType, customizationOptions }) => {
// // //   const [data, setData] = useState({
// // //     labels: [],
// // //     datasets: [
// // //       {
// // //         label: 'Data',
// // //         data: [],
// // //         backgroundColor: 'rgba(75,192,192,0.2)',
// // //         borderColor: 'rgba(75,192,192,1)',
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   });

// // //   useEffect(() => {
    
// // //     socket.on('updateChartData', (newData) => {
// // //       setData(newData);
// // //     });

// // //     return () => {
// // //       socket.off('updateChartData');
// // //     };
// // //   }, []);
// // //   const existingChart = Chart.getChart('0');

// // //   // Check if the chart exists
// // //   if (existingChart) {
// // //     // Destroy the existing chart
// // //     existingChart.destroy();
// // //   }

// // //   // Set up the socket event listener
// // //   socket.on('updateChartData', (newData) => {
// // //     // Update the component state with new data
// // //     setData(newData);
// // //   });

// // //   const options = {
// // //     // Add customization options here
// // //     scales: {
// // //       x: { ...customizationOptions.xAxis },
// // //       y: { ...customizationOptions.yAxis },
// // //     },
// // //   };

// // //   const Chart = chartType === 'bar' ? Bar : Line;

// // //   return <Chart data={data} options={options} />;
// // // };

// // // export default ChartComponent;
// // // import React, { useEffect, useState } from 'react';
// // // import { Bar, Line } from 'react-chartjs-2';
// // // import io from 'socket.io-client';

// // // const socket = io('http://localhost:3001'); // Replace with your server URL

// // // const ChartComponent = ({ chartType, customizationOptions }) => {
// // //   // Define Chart before using it
// // //   const Chart = chartType === 'bar' ? Bar : Line;

// // //   // State for holding chart data
// // //   const [data, setData] = useState({
// // //     labels: [],
// // //     datasets: [
// // //       {
// // //         label: 'Data',
// // //         data: [],
// // //         backgroundColor: 'rgba(75,192,192,0.2)',
// // //         borderColor: 'rgba(75,192,192,1)',
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   });

// // //   // Effect to handle socket events
// // //   useEffect(() => {
// // //     // Get the existing chart by ID
// // //     const existingChart = Chart.getChart('0');

// // //     // Check if the chart exists
// // //     if (existingChart) {
// // //       // Destroy the existing chart
// // //       existingChart.destroy();
// // //     }

// // //     // Set up the socket event listener
// // //     socket.on('updateChartData', (newData) => {
// // //       // Update the component state with new data
// // //       setData(newData);
// // //     });

// // //     // Clean up the socket event listener on component unmount
// // //     return () => {
// // //       socket.off('updateChartData');
// // //     };
// // //   }, ); // Empty dependency array to run the effect only once on mount

// // //   // Options for the chart
// // //   const options = {
// // //     scales: {
// // //       x: { ...customizationOptions.xAxis },
// // //       y: { ...customizationOptions.yAxis },
// // //     },
// // //   };

// // //   // Render the Chart component
// // //   return <Chart data={data} options={options} />;
// // // };

// // // export default ChartComponent;
// // import React, { useEffect, useState } from 'react';
// // import { Bar, Line } from 'react-chartjs-2';
// // import io from 'socket.io-client';

// // const socket = io('http://localhost:3001'); // Replace with your server URL

// // const ChartComponent = ({ chartType, customizationOptions }) => {
// //   // Define Chart before using it
// //   const Chart = chartType === 'bar' ? Bar : Line;

// //   // State for holding chart data
// //   const [data, setData] = useState({
// //     labels: [],
// //     datasets: [
// //       {
// //         label: 'Data',
// //         data: [],
// //         backgroundColor: 'rgba(75,192,192,0.2)',
// //         borderColor: 'rgba(75,192,192,1)',
// //         borderWidth: 1,
// //       },
// //     ],
// //   });

// //   // State for holding the Chart.js instance
// //   const [chartInstance, setChartInstance] = useState(null);

// //   // Effect to handle socket events
// //   useEffect(() => {
// //     // Check if the chart instance exists
// //     if (chartInstance) {
// //       // Destroy the existing chart
// //       chartInstance.destroy();
// //     }

// //     // Set up the socket event listener
// //     const updateChartData = (newData) => {
// //       // Update the component state with new data
// //       setData(newData);
// //     };

// //     // Attach the event listener to the socket
// //     socket.on('updateChartData', updateChartData);

// //     // Save the Chart.js instance to state
// //     setChartInstance(Chart);

// //     // Clean up the socket event listener on component unmount
// //     return () => {
// //       socket.off('updateChartData', updateChartData);
// //     };
// //   }, [Chart, chartInstance]);

// //   // Options for the chart
// //   const options = {
// //     scales: {
// //       x: { ...customizationOptions.xAxis },
// //       y: { ...customizationOptions.yAxis },
// //     },
// //   };

// //   // Render the Chart component
// //   return <Chart data={data} options={options} />;
// // };

// // export default ChartComponent;
// import React, { useEffect, useState, useRef } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import io from 'socket.io-client';
// import { Chart, CategoryScale, LinearScale } from 'chart.js';

// const socket = io('http://localhost:3001');

// // Register the required scales globally
// Chart.register(CategoryScale, LinearScale);

// const ChartComponent = ({ chartType, customizationOptions }) => {
//   // Define Chart before using it
//   const ChartElement = chartType === 'bar' ? Bar : Line;

//   // State for holding chart data
//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Data',
//         data: [],
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   });

//   // Ref to track the latest Chart instance without causing re-renders
//   const chartInstanceRef = useRef(null);

//   // Effect to handle socket events
//   useEffect(() => {
//     // Check if the chart instance exists
//     if (chartInstanceRef.current) {
//       // Destroy the existing chart
//       chartInstanceRef.current.destroy();
//     }

//     // Set up the socket event listener
//     const updateChartData = (newData) => {
//       // Update the component state with new data
//       setData(newData);
//     };

//     // Attach the event listener to the socket
//     socket.on('updateChartData', updateChartData);

//     // Save the Chart.js instance to state
//     const newChartInstance = new Chart(document.getElementById('myChart'), {
//       type: chartType,
//       data: data,
//       options: customizationOptions,
//     });

//     // Save the new instance to state
//     chartInstanceRef.current = newChartInstance; // Update the ref with the latest instance

//     // Clean up the socket event listener on component unmount
//     return () => {
//       socket.off('updateChartData', updateChartData);
//     };
//   }, [chartType, customizationOptions, data]); // Removed 'chartInstance' from the dependency array

//   // Render the Chart component
//   return <ChartElement data={data} options={customizationOptions} />;
// };

// export default ChartComponent;
import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import io from 'socket.io-client';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, )

const socket = io('http://localhost:3001'); // Replace with your server URL

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

return () => {
socket.off('updateChartData');
};
}, []);

const options = {
// Add customization options here
scales: {
x: { ...customizationOptions.xAxis },
y: { ...customizationOptions.yAxis },
},
};

const Chart = chartType === 'bar' ? Bar : Line;

return <Chart data={data} options={options} />;
};

export default ChartComponent