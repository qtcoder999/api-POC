/* eslint-disable linebreak-style */
/**
 *
 * TigerDumb
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TigerDumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { componentNames } = this.props;
    return (
      <div>
        Component names received:
        {componentNames &&
          componentNames.map(item => <div>{item.componentName}</div>)}
        )
      </div>
    );
  }
}

TigerDumb.propTypes = {
  componentNames: PropTypes.any,
};

export default TigerDumb;
