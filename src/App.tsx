import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet-async';
import { history } from '@/store';
import { ThemeProvider } from 'styled-components';

import Layout from './layouts';
import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

import PageLoading from '@/components/page-loading';

import '@/locales/i18n';

const App: React.FC = () => {
  return (
    <Router>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="Mordern React Boilerplate"
      >
        <meta name="description" content="Mordern React Boilerplate" />
      </Helmet>

      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Suspense fallback={<PageLoading show />}>
            <Layout />
            <PageLoading />
          </Suspense>
        </ThemeProvider>
      </ConnectedRouter>
    </Router>
  );
};

export default App;
