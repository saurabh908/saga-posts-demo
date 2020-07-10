import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../actions';

const ROOT_URL = 'https://5efcb20dcf235d0016ad7bc4.mockapi.io/api/v1';


export function* watchFetchPosts() {
  yield takeEvery(types.FETCH_POSTS, workFetchPosts);
}


// Worker sagas
// Respond to the actions that are caught by the watcher sagas
export function* workFetchPosts() {
  try {
    // Try to call the API
    const uri = `${ROOT_URL}/inventory`;
    console.log(uri);
    const response = yield call(axios.get, uri);
    console.log(response);
    // Dispatch the action to the reducers
    yield put({
      type: types.FETCH_POSTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    // Act on the error
    console.log('Request failed! Could not fetch posts.');
  }
}





