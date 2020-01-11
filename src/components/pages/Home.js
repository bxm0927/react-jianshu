import React, { useState } from 'react'
import { HomeWrapper, LeftWrapper, RighttWrapper, Banner, Topic, ArticleList } from './Home.style'
import banner from '../../assets/images/home/banner.png'

const Home = () => {
  const [topicList, setTopicList] = useState([
    { name: '手绘', pic: 'https://i.picsum.photos/id/1/100/100.jpg', link: '.' },
    { name: '社会热点', pic: 'https://i.picsum.photos/id/1022/100/100.jpg', link: '.' },
    { name: '简书电影', pic: 'https://i.picsum.photos/id/1020/100/100.jpg', link: '.' },
    { name: '读书', pic: 'https://i.picsum.photos/id/1018/100/100.jpg', link: '.' },
    { name: '摄影', pic: 'https://i.picsum.photos/id/1024/100/100.jpg', link: '.' },
    { name: '旅行·在路上', pic: 'https://i.picsum.photos/id/1023/100/100.jpg', link: '.' },
    { name: '历史', pic: 'https://i.picsum.photos/id/1008/100/100.jpg', link: '.' },
  ])

  return (
    <HomeWrapper className="container clearfix">
      <LeftWrapper>
        <Banner>
          <img src={banner} alt="2019年度10个好故事" />
        </Banner>

        <Topic>
          <ul className="topic-list">
            {topicList.map(item => (
              <li className="topic-item" key={item.name}>
                <a className="topic-link" href={item.link} target="_blank">
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
        </Topic>

        <ArticleList>ArticleList</ArticleList>
      </LeftWrapper>

      <RighttWrapper>righttWrapper</RighttWrapper>
    </HomeWrapper>
  )
}

export default Home
