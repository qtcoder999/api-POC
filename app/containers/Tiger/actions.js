/* eslint-disable linebreak-style */
/*
 *
 * Tiger actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_COMPONENT_NAME_SUCCESS,
  GET_COMPONENT_NAME,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function setComponentNames(payload) {
  return {
    type: GET_COMPONENT_NAME_SUCCESS,
    payload,
  };
}
export function getComponentNames() {
  return {
    type: GET_COMPONENT_NAME,
  };
}
