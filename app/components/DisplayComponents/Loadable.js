/* eslint-disable linebreak-style */
/**
 *
 * Asynchronously loads the component for DisplayComponents
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
