/* eslint-disable linebreak-style */
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_COMPONENT_NAME } from './constants';
import request from '../../utils/request';
import { setComponentNames } from './actions';

export function* getRepos() {
  // const requestURL = `http://demo9304193.mockable.io/`;
  const requestURL = `https://www.mocky.io/v2/5cb5ab5e330000e9385d7d05`;

  try {
    // Call our request helper (see 'utils/request')
    const names = yield call(request, requestURL);
    yield put(setComponentNames(names));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

// Individual exports for testing
export default function* tigerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_COMPONENT_NAME, getRepos);
}
