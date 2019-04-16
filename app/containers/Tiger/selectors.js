import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tiger state domain
 */

const selectTigerDomain = state => state.get('tiger', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tiger
 */

const makeSelectTiger = () =>
  createSelector(selectTigerDomain, substate => substate.toJS());

export default makeSelectTiger;
export { selectTigerDomain };
