import { SET_DETAIL_CONTENT } from './actionTypes'

const initialState = {
  detailContent: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_CONTENT:
      return Object.assign({}, state, {
        detailContent: action.detailContent,
      })

    default:
      return state
  }
}
