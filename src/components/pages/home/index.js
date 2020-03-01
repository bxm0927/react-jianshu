import React from 'react'
import Banner from './components/Banner'
import Topic from './components/Topic'
import ArticleList from './components/ArticleList'
import Board from './components/Board'
import QRCode from './components/QRCode'
import Writer from './components/Writer'
import { HomeWrapper, LeftWrapper, RighttWrapper } from './style'

const Home = () => {
  return (
    <HomeWrapper className="container clearfix">
      <LeftWrapper>
        <Banner />
        <Topic />
        <ArticleList />
      </LeftWrapper>

      <RighttWrapper>
        <Board />
        <QRCode />
        <Writer />
      </RighttWrapper>
    </HomeWrapper>
  )
}

export default Home
