import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  fetchTopicList,
  fetchArticleList,
} from '../../../store/modules/home/actionCreators'

import Banner from './components/Banner'
import Topic from './components/Topic'
import ArticleList from './components/ArticleList'
import Board from './components/Board'
import QRCode from './components/QRCode'
import Writer from './components/Writer'
import { HomeWrapper, LeftWrapper, RighttWrapper } from './style'

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
    </HomeWrapper>
  )
}

const mapDispatchToProps = {
  fetchTopicList,
  fetchArticleList,
}

export default connect(null, mapDispatchToProps)(Home)
