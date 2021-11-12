import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated, setCurrentUser } from '@/store/slices/authSlice';
import { getCurrentUser } from '@/apis/auth';

import { getToken, goURL } from '@/utils';

interface IProps {
  children: React.ReactElement;
}

const Auth: React.FC<IProps> = ({ children }) => {
  const [renderRouter, setRenderRouter] = useState(false);
  const dispatch = useDispatch();

  const fetchCurrentUser = useCallback(async () => {
    try {
      const response = await getCurrentUser();
      if (response && response.data) {
        dispatch(setAuthenticated(true));
        dispatch(setCurrentUser(response.data));
      }
    } catch (error) {
      goURL('/login');
    }
    setRenderRouter(true);
  }, [dispatch]);

  useEffect(() => {
    if (!getToken()) {
      goURL('/login');
      setRenderRouter(false);
    } else {
      fetchCurrentUser();
    }
  }, [fetchCurrentUser]);

  return renderRouter ? children : null;
};

export default Auth;
