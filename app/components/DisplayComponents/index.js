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
    this.DynamicComponent = ReactDynamicImport({
      name: componentName,
      loader,
    });
  }

  render() {
    const { DynamicComponent } = this;

    return (
      <div>
        {DynamicComponent && DynamicComponent !== 'undefined' ? (
          <DynamicComponent />
        ) : null}
      </div>
    );
  }
}

DisplayComponents.propTypes = { componentNames: PropTypes.array };

export default DisplayComponents;
