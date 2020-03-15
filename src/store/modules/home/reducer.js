import { SET_TOPIC_LIST, SET_ARTICLE_LIST } from './actionTypes'

const initialState = {
  topicList: [],
  articleList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPIC_LIST:
      return Object.assign({}, state, {
        topicList: action.topicList,
      })

    case SET_ARTICLE_LIST:
      return Object.assign({}, state, {
        articleList: action.articleList,
      })

    default:
      return state
  }
}
