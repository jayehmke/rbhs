/**
 *
 * Account
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAccount from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Layout from '../../components/Layout/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class Account extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Account</title>
          <meta name="description" content="Description of Account" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </Layout>
    );
  }
}

Account.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
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

const withReducer = injectReducer({ key: 'account', reducer });
const withSaga = injectSaga({ key: 'account', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Account);
