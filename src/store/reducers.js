import { combineReducers } from 'redux'
import home from './modules/home/reducer'
import detail from './modules/detail/reducer'
import search from './modules/search/reducer'

export default combineReducers({
  home,
  detail,
  search,
})
