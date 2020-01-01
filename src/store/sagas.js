import { takeEvery } from 'redux-saga/effects'

function* fetchUsers() {
  yield console.log('todo')
  // const result = yield axios.get('/users.json')
  // const action = usersData(result)
  // yield put(action)
}

function* mySaga() {
  yield takeEvery('GET_USERS_DATA', fetchUsers)
}

export default mySaga
