import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArticleListWrapper } from '../style'

const ArticleList = ({ articleList }) => {
  return (
    <ArticleListWrapper>
      <ul>
        {articleList.map(item => (
          <li className="list-item" key={item.id}>
            <div className="left-info">
              <Link to={`/detail/${item.id}`} className="title">
                {item.title}
              </Link>
              <p className="summary">{item.summary}</p>
              <p className="meta">
                <span className="author">
                  <i className="iconfont icon-zuozhe" /> {item.author}
                </span>
                <span className="like">
                  <i className="iconfont icon-dianzan1" /> 8
                </span>
              </p>
            </div>

            <div className="right-pic">
              <img src={item.pic} alt={item.title} className="pic" />
            </div>
          </li>
        ))}
      </ul>

      <div className="load-more">
        <button className="load-more-btn">阅读更多</button>
      </div>
    </ArticleListWrapper>
  )
}

const mapStateToProps = state => ({
  articleList: state.home.articleList,
})

export default connect(mapStateToProps)(ArticleList)
