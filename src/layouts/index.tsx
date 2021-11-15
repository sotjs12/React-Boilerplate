import React, { Fragment } from 'react';

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

export default Layout;
