/* eslint-disable linebreak-style */
/**
 *
 * Tiger
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTiger from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TigerDumb from '../../components/TigerDumb';

/* eslint-disable react/prefer-stateless-function */
export class Tiger extends React.Component {
  render() {
    return (
      <div>
        <TigerDumb {...this.props} />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Tiger.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tiger: makeSelectTiger(),
});

function mapDispatchToProps(dispatch) {
  return {
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
