import { FETCH_HOT_LIST_SUCCESS } from './actionTypes'

const initialState = {
  value: 0,
  hotList: [],
  historyList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOT_LIST_SUCCESS:
      return Object.assign({}, state, {
        hotList: action.hotList,
      })
    default:
      return state
  }
}

export default reducer

// TODO:
// import { combineReducers } from 'redux'
// export default combineReducers({})
