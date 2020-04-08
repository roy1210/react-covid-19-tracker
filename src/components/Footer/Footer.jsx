import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>© {currentYear} Roy1210 All Rights Reserved.</footer>
  )
}

export default Footer
