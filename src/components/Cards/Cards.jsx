import React from 'react'
import { Grid, CardContent, Typography, Card } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate, stillInfected } }) => {

  if (!confirmed) {
    return 'Loading...'
  }

  const cards = [
    {
      title: 'Total Infected',
      class: styles.infected,
      end: confirmed.value,
      text: 'Number of patient still infected of COVID-19'
    },
    {
      title: 'Still Infected',
      class: styles.infecting,
      end: stillInfected,
      text: 'Number of patient still infected COVID-19'
    },
    {
      title: 'Recovered',
      class: styles.recovered,
      end: recovered.value,
      text: 'Number of patient recovered from COVID-19'
    },
    {
      title: 'Deaths',
      class: styles.deaths,
      end: deaths.value,
      text: 'Number of patient killed by COVID-19'
    },
  ]

  return (
    // Memo: cx: apply multiple classes

    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cards.map(card => (
          <Grid item xs={12} md={2} component={Card} className={cx(styles.card, card.class)} key={card.title} >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={card.end}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                {card.text}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Cards
