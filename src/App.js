import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


import './App.css';

function App() {
  let [reportsData, setData] = useState([])
  useEffect(() => {
    async function fetchData(){
      let data = await fetch("http://localhost:8000/")
      let response = await data.json()
      setData(response.reportsPerDay)
      console.log(response.reportsPerDay)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
    <Line
  datasetIdKey='id'
  data={{
    labels: ['1 November', '2 November', '3 November','4 November', '5 November', '6 November'],
    datasets: [
      {
        label: 'Reports Per Day',
        data: reportsData,
        borderColor: "red",
        backgroundColor: "brown",
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15
      },
    ],
  }}
/>
    </div>
  );
}

export default App;
