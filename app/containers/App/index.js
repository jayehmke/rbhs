/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Account from 'containers/Account/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Blecelet"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A BLE Bracelet" />
      </Helmet>
      {/*<Header />*/}
      <Switch>
        <Route exact path="/app" component={HomePage} />
        <Route exact path="/app/account" component={Account} />
        <Route path="/features" component={FeaturePage} />
        {/*<Route path="" component={NotFoundPage} />*/}
      </Switch>
      {/*<Footer />*/}
    </AppWrapper>
  );
}