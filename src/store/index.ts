import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import appSlice from './slices/appSlice';
import authSlice from './slices/authSlice';
import layoutSlice from './slices/layoutSlice';

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk];

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    app: appSlice,
    auth: authSlice,
    layout: layoutSlice,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
