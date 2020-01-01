const initialState = {
  value: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        value: state.value + action.value,
      })

    default:
      return state
  }
}

export default reducer

// TODO:
// import { combineReducers } from 'redux'
// export default combineReducers({})
