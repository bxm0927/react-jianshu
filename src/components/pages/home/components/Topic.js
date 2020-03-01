import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper } from '../style'

const Topic = ({ topicList }) => {
  return (
    <TopicWrapper>
      <ul className="topic-list">
        {topicList.map(item => (
          <li className="topic-item" key={item.id}>
            <a
              className="topic-link"
              href={`/topic/${item.id}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="pic" src={item.pic} alt={item.name} />
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
    </TopicWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.home.topicList,
})

export default connect(mapStateToProps)(Topic)
