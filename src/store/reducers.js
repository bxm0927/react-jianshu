import { RESOLVE_HOTLIST } from './actionTypes'

const initialState = {
  value: 0,
  hotList: [],
  historyList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESOLVE_HOTLIST:
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
