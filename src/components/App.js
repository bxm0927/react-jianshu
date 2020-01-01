import React from 'react'
import AppHeader from './common/AppHeader'
import styles from './App.module.scss'

function App() {
  return (
    <div className="App">
      <AppHeader />

      <main className={styles.appContainer}>AppContainer</main>

      <footer className={styles.appFooter}>AppFooter</footer>
    </div>
  )
}

export default App
