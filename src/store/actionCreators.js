import axios from 'axios'
import { FETCH_HOT_LIST_BEGIN, FETCH_HOT_LIST_SUCCESS, FETCH_HOT_LIST_FAILURE } from './actionTypes'

export const fetchHotListRequest = () => ({ type: FETCH_HOT_LIST_BEGIN })
export const fetchHotListSuccess = hotList => ({ type: FETCH_HOT_LIST_SUCCESS, hotList })
export const fetchHotListFailure = error => ({ type: FETCH_HOT_LIST_FAILURE, error })

export const fetchHotList = () => {
  return dispatch => {
    dispatch(fetchHotListRequest())
    axios
      .get('/mock/historyList.json')
      .then(function({ status, data }) {
        if (status === 200 && data.code === '0') {
          dispatch(fetchHotListSuccess(data.data.hotList))
        }
      })
      .catch(function(error) {
        dispatch(fetchHotListFailure(error))
      })
  }
}
