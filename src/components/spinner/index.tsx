import React from 'react';
import { LoadingWrapper, LoadingInner } from './styled';

const Spinner: React.FC = () => {
  return (
    <LoadingWrapper>
      <LoadingInner one />
      <LoadingInner two />
      <LoadingInner three />
    </LoadingWrapper>
  );
};

export default Spinner;
