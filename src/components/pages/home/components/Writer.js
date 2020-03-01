import React from 'react'
import { WriterWrapper } from '../style'

export default function Writer() {
  return (
    <WriterWrapper>
      <p className="title">推荐作者</p>

      <ul className="writer-list">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <li className="list-item" key={index}>
            <div className="avatar">
              <img
                src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
            </div>
            <div className="info">
              <p className="name">灰土豆</p>
              <p className="meta">写了347.3k字 · 1.9k喜欢</p>
            </div>
            <span className="follow">
              <i className="iconfont icon-guanzhu" /> 关注
            </span>
          </li>
        ))}
      </ul>

      <button className="more">
        查看全部 <i className="iconfont icon-more" />
      </button>
    </WriterWrapper>
  )
}
