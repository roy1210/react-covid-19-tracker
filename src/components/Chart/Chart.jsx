import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import styles from './Chart.module.css'
import { Line, Bar } from "react-chartjs-2"
import urgentImg from '../../images/title-urgent.png'

const Chart = ({ data: { confirmed, deaths, recovered, stillInfected }, country }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }

    fetchAPI()
  }, [])
  console.log('dailydata', dailyData);

  const lineChart = (
    dailyData.length ?
      (<Line
        // height={170}
        data={{
          // Memo: map and return an array of all of the date
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'infected',
            borderColor: '#3333ff',
            fill: true
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true
          }
          ]
        }}
      />)
      : null);

  const barChart = (
    confirmed ?
      (
        <Bar
          data={{
            labels: ['Total infected', 'Still infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.7)',
                'rgba(248, 148, 6, 0.7)',
                'rgba(0, 255, 0, 0.7)',
                'rgba(255, 0, 0, 0.7)'
              ],
              data: [confirmed.value, stillInfected, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
          }}
        />
      ) : null
  )

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
      <img src={urgentImg} alt="urgent" className={styles.urgentImg} />
    </div>
  )
}

export default Chart
