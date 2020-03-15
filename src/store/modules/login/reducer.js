import { LOGIN, LOGOUT } from './actionTypes'

const initialState = {
  hasLogin: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, hasLogin: true }

    case LOGOUT:
      return { ...state, hasLogin: false }

    default:
      return state
  }
}
