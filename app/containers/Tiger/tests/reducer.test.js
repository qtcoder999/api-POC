import { fromJS } from 'immutable';
import tigerReducer from '../reducer';

describe('tigerReducer', () => {
  it('returns the initial state', () => {
    expect(tigerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
