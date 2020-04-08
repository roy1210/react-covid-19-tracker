import React from 'react'
import styles from './Title.module.css'
import titleImg from '../../images/titleImg.png'

const Title = () => {
  return (
    <div className={styles.container}>
      <img src={titleImg} alt="title" className={styles.title} />
    </div>
  )
}

export default Title
