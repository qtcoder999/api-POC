/* eslint-disable linebreak-style */
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

export const makeSelectTiger = () =>
  createSelector(selectTigerDomain, substate => substate.toJS());

export const makeSelectComponentNames = () =>
  createSelector(selectTigerDomain, substate => {
    const toJS1 = substate.toJS().componentNames;
    return toJS1;
  });

export default makeSelectTiger;
export { selectTigerDomain };
