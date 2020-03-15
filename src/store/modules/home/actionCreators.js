import axios from 'axios'
import { SET_TOPIC_LIST, SET_ARTICLE_LIST } from './actionTypes'

const setTopicList = topicList => ({
  type: SET_TOPIC_LIST,
  topicList,
})

const setArticleList = articleList => ({
  type: SET_ARTICLE_LIST,
  articleList,
})

export const fetchTopicList = () => {
  return async dispatch => {
    const { status, data } = await axios.get('/mock/topicList.json')
    if (status === 200 && data.code === '0') {
      dispatch(setTopicList(data.data.topicList))
    }
  }
}

export const fetchArticleList = () => {
  return async dispatch => {
    const { status, data } = await axios.get('/mock/articleList.json')
    if (status === 200 && data.code === '0') {
      dispatch(setArticleList(data.data.articleList))
    }
  }
}
