import React from 'react'
import { Row } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const Linechart=({coinHistory,currentPrice,coinName})=> {
    const coinPrice=[]
    const coinTimestamp=[]
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      }
    
      for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      }
      const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      const chart = new Chart({
        type: 'line',
        data: data,
        
      });
  return (
    <>
      <Row className='chart-header'>
        <h3>{coinName} Price Chart</h3>
        <h4 className='details'>{coinHistory?.data?.change}%</h4>
        <h4 className='details'>Current {coinName} Price : $ {currentPrice}%</h4>
      </Row>
     
      <Line chart={chart} data={data} options={options} style={{marginLeft:'12%',marginRight:'12%',marginTop:'2rem',marginBottom:'2rem'}} />
    </>
  )
}

export default Linechart