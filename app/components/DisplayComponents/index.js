/* eslint-disable linebreak-style */
/**
 *
 * DisplayComponents
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DisplayComponents({ componentNames }) {
  return (
    <div>
      Component names received:
      {componentNames &&
        componentNames.map(item => <div>{item.componentName}</div>)}
    </div>
  );
}

DisplayComponents.propTypes = { componentNames: PropTypes.any };

export default DisplayComponents;
