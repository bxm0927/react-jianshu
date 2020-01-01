import React from 'react'
import Header from './common/Header'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.appContainer}>AppContainer</main>

      <footer className={styles.appFooter}>AppFooter</footer>
    </div>
  )
}

export default App
