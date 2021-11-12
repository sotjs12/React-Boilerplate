import { selectLoading } from '@/store/slices/appSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import { StyledPageLoading } from './styled';

interface IProps {
  show?: boolean;
}

const PageLoading: React.FC<IProps> = ({ show }) => {
  const { loading } = useSelector(selectLoading);
  const showLoading = typeof show === 'boolean' ? show : loading;

  return (
    <StyledPageLoading showLoading={showLoading}>
      <Spinner />
    </StyledPageLoading>
  );
};

export default PageLoading;
