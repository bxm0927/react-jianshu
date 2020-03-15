import axios from 'axios'
import { LOGIN, LOGOUT } from './actionTypes'

export const setLogin = () => ({ type: LOGIN })
export const setLogout = () => ({ type: LOGOUT })

export const fetchLogin = (username, password) => {
  return async dispatch => {
    const { status, data } = await axios.get('/mock/login.json', {
      params: { username, password },
    })
    if (status === 200 && data.code === '0' && data.data.login) {
      dispatch(setLogin())
    }
  }
}
