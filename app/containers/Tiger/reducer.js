/* eslint-disable linebreak-style */
/*
 *
 * Tiger reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, GET_COMPONENT_NAME_SUCCESS } from './constants';

export const initialState = fromJS({});

function tigerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_COMPONENT_NAME_SUCCESS:
      return state.set('componentNames', action.payload);
    default:
      return state;
  }
}

export default tigerReducer;
