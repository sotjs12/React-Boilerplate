import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '@/router';
import { compareTwoObject, isEmptyObject } from '@/utils';
import { useShallowEqualSelector } from '@/hooks/useShallowEqual';

import {
  ILayout,
  selectDisplayLayout,
  setDisplayLayout,
} from '@/store/slices/layoutSlice';

import { Wrapper } from './styled';

type RouteProps = {
  component: any;
  path: string;
  layout?: ILayout;
};

const Main: React.FC = () => {
  const layout: ILayout = useShallowEqualSelector(selectDisplayLayout);
  const dispatch = useDispatch();

  const updateDisplayLayout = (currentLayout: ILayout, layout: ILayout) => {
    const layoutUpdated: ILayout = isEmptyObject(currentLayout)
      ? { header: true, footer: true }
      : { header: !!currentLayout.header, footer: !!currentLayout.footer };
    if (!compareTwoObject(layoutUpdated, layout)) {
      setTimeout(() => dispatch(setDisplayLayout(layoutUpdated)));
    }
  };

  return (
    <Wrapper>
      <Switch>
        {routes.map(
          ({
            component: Component,
            path,
            layout: currentLayout,
            ...rest
          }: RouteProps) => (
            <Route
              key={path}
              path={path}
              render={props => {
                updateDisplayLayout(currentLayout, layout);
                /**
                 * Use this code for authorization like admin page
                 */
                // return (
                //   <Auth>
                //     <Component {...props} />
                //   </Auth>
                // );
                return <Component {...props} />;
              }}
              {...rest}
            />
          ),
        )}
      </Switch>
    </Wrapper>
  );
};

export default Main;
