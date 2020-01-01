import React from 'react'
import styles from './App.module.scss'

function Test() {
  return (
    <div>
      <h1 className={styles.title}>
        title: Lorem ipsum dolor sit amet.
        <p className={styles.subtitle}>subtitle: Lorem ipsum dolor sit amet.</p>
      </h1>
      <p className={styles.subtitle}>subtitle: Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Test
