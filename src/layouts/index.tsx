import React, { Fragment } from 'react';
import GlobalStyles from '../styles/global';
import theme from '@/styles/theme';

import Header from './header';
import Main from './main';
import Footer from './footer';

const Layout: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export { GlobalStyles, theme };
export default Layout;
