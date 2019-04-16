/* eslint-disable linebreak-style */
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_COMPONENT_NAME } from './constants';
import request from '../../utils/request';

export function* getRepos() {
  const requestURL = `http://demo9304193.mockable.io/`;

  try {
    // Call our request helper (see 'utils/request')
    const names = yield call(request, requestURL);
    yield put(reposLoaded(names));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* tigerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_COMPONENT_NAME, getRepos);
}
