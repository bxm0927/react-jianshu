import { RESOLVE_HOTLIST } from './actionTypes'

const initialState = {
  hotList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESOLVE_HOTLIST:
      return Object.assign({}, state, {
        hotList: action.hotList,
      })

    default:
      return state
  }
}
