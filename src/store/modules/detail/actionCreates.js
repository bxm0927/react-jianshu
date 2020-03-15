import axios from 'axios'
import { SET_DETAIL_CONTENT } from './actionTypes'

const setDetailContent = detailContent => ({
  type: SET_DETAIL_CONTENT,
  detailContent,
})

export const fetchDetailContent = id => {
  return async dispatch => {
    const { status, data } = await axios.get('/mock/detailContent.json', {
      params: { id },
    })
    if (status === 200 && data.code === '0') {
      dispatch(setDetailContent(data.data))
    }
  }
}
