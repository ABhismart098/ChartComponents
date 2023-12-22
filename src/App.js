
import React from 'react';
import ChartComponent from './components/chart'; 

const mockData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const customizationOptions = {
  xAxis: {
   
  },
  yAxis: {
   
  },
};

function App() {
  return (
    <div className="App">
      <h1>Data Visualization Chart</h1>
      <ChartComponent data={mockData} chartType="bar" customizationOptions={customizationOptions} />
      
    </div>
  );
}

export default App;
