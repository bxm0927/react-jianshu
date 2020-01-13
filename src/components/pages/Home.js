import React from 'react'
import { connect } from 'react-redux'
import banner from '../../assets/images/home/banner.png'
import {
  HomeWrapper,
  LeftWrapper,
  RighttWrapper,
  Banner,
  Topic,
  ArticleListWrapper,
  ArticleList,
  ArticleListItem,
  LeftInfo,
  RightPic,
} from './Home.style'

const Home = ({ topicList }) => {
  function renderTopicList() {
    return (
      <ul className="topic-list">
        {topicList.map(item => (
          <li className="topic-item" key={item.name}>
            <a className="topic-link" href={item.link} rel="noopener noreferrer" target="_blank">
              <img className="pic" src={item.pic} alt="placeskull" />
              <span className="name">{item.name}</span>
            </a>
          </li>
        ))}
        <li className="topic-item topic-more">
          <a href="/" className="more">
            更多热门专题 &gt;
          </a>
        </li>
      </ul>
    )
  }

  function renderArticleList() {
    return (
      <ArticleList>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <ArticleListItem key={index}>
            <LeftInfo>LeftInfo</LeftInfo>
            <RightPic>RightPic</RightPic>
          </ArticleListItem>
        ))}
      </ArticleList>
    )
  }

  return (
    <HomeWrapper className="container clearfix">
      <LeftWrapper>
        <Banner>
          <img src={banner} alt="2019年度10个好故事" />
        </Banner>

        <Topic>{renderTopicList()}</Topic>

        <ArticleListWrapper>{renderArticleList()}</ArticleListWrapper>
      </LeftWrapper>

      <RighttWrapper>righttWrapper</RighttWrapper>
    </HomeWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.home.topicList,
})

export default connect(mapStateToProps)(Home)
