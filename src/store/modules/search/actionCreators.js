import axios from 'axios'
import { FETCH_HOTLIST, RESOLVE_HOTLIST, REJECT_HOTLIST } from './actionTypes'

export const fetchHotListRequest = () => ({
  type: FETCH_HOTLIST,
})
export const fetchHotListSuccess = hotList => ({
  type: RESOLVE_HOTLIST,
  hotList,
})
export const fetchHotListFailure = error => ({
  type: REJECT_HOTLIST,
  error,
})

export const fetchHotList = () => {
  return async dispatch => {
    dispatch(fetchHotListRequest())
    const { status, data } = await axios.get('/mock/hotList.json')
    if (status === 200 && data.code === '0') {
      dispatch(fetchHotListSuccess(data.data.hotList))
    } else {
      dispatch(fetchHotListFailure())
    }
  }
}
