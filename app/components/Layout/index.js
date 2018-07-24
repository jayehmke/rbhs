/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Layout(props) {
  return (
    <div>
      {/*<FormattedMessage {...messages.header} />*/}
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
