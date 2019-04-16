/* eslint-disable linebreak-style */
/**
 *
 * DisplayComponents
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDynamicImport from 'react-dynamic-import';

const loader = componentName => import(`components/${componentName}/index.js`);

class DisplayComponents extends Component {
  // eslint-disable-next-line no-unused-vars
  componentWillReceiveProps(nextProps) {
    const { componentNames } = nextProps;

    if (componentNames && componentNames !== 'undefined') {
      componentNames.map(item => this.renderComponent(item.componentName));
    }
  }

  renderComponent(componentName) {
    this.RealComponent = ReactDynamicImport({
      name: componentName,
      loader,
    });
  }

  render() {
    const { RealComponent } = this;

    return (
      <div>
        {RealComponent && RealComponent !== 'undefined' ? (
          <RealComponent />
        ) : null}
      </div>
    );
  }
}

DisplayComponents.propTypes = { componentNames: PropTypes.array };

export default DisplayComponents;
