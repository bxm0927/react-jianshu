import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/home'
import Login from './pages/login'
import Article from './pages/article'
import Detail from './pages/detail'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/article/:id" component={Article} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/login" component={Login} />

      <Footer />
    </BrowserRouter>
  )
}

export default App
