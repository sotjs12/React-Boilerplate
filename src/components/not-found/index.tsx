import React from 'react';
import { Link } from 'react-router-dom';

import { StyledSection } from './styled';

const NotFound: React.FC = () => {
  return (
    <StyledSection>
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <Link to="/">
        <i className="icon-home"></i> Go back in initial page, is better.
      </Link>
    </StyledSection>
  );
};

export default NotFound;
