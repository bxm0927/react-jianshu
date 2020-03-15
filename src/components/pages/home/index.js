import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import Board from './components/Board'
import Banner from './components/Banner'
import QRCode from './components/QRCode'
import Writer from './components/Writer'
import GotoTop from './components/GotoTop'
import ArticleList from './components/ArticleList'

import { HomeWrapper, LeftWrapper, RighttWrapper } from './style'
import {
  fetchTopicList,
  fetchArticleList,
} from '../../../store/modules/home/actionCreators'

const Home = ({ fetchTopicList, fetchArticleList }) => {
  useEffect(() => {
    fetchTopicList()
    fetchArticleList()
  })

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

      <GotoTop />
    </HomeWrapper>
  )
}

const mapDispatchToProps = {
  fetchTopicList,
  fetchArticleList,
}

export default connect(null, mapDispatchToProps)(Home)
