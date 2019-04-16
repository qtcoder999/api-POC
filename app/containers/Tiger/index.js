/* eslint-disable linebreak-style */
/**
 *
 * Tiger
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectComponentNames } from './selectors';
import reducer from './reducer';
import saga from './saga';
import DisplayComponents from '../../components/DisplayComponents';
import { getComponentNames } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Tiger extends React.Component {
  componentDidMount() {
    this.props.getComponentNames();
  }

  render() {
    return (
      <div>
        <DisplayComponents {...this.props} />
      </div>
    );
  }
}

Tiger.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // tiger: makeSelectTiger(),
  componentNames: makeSelectComponentNames(),
});

function mapDispatchToProps(dispatch) {
  return {
    getComponentNames() {
      dispatch(getComponentNames());
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tiger', reducer });
const withSaga = injectSaga({ key: 'tiger', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Tiger);
