import axios from 'axios'
import { FETCH_HOTLIST, RESOLVE_HOTLIST, REJECT_HOTLIST } from './actionTypes'

export const fetchHotListRequest = () => ({ type: FETCH_HOTLIST })
export const fetchHotListSuccess = hotList => ({ type: RESOLVE_HOTLIST, hotList })
export const fetchHotListFailure = error => ({ type: REJECT_HOTLIST, error })

export const fetchHotList = () => {
  return dispatch => {
    dispatch(fetchHotListRequest())
    axios
      .get('/mock/hotList.json')
      .then(function({ status, data }) {
        if (status === 200 && data.code === '0') {
          dispatch(fetchHotListSuccess(data.data.hotList))
        } else {
          dispatch(fetchHotListFailure())
        }
      })
      .catch(function(error) {
        dispatch(fetchHotListFailure(error))
      })
  }
}
