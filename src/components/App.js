import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/home'
import Article from './pages/article'
import Detail from './pages/detail'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/article" component={Article} />
        <Route path="/detail" component={Detail} />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
