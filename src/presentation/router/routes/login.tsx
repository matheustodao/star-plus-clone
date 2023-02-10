import { LayoutRoot } from '@presentation/components/shared/Layout';
import { LoginPage } from '@presentation/pages/login';
import { RouteObject } from 'react-router-dom';

export const RoutingLogin: RouteObject = {
  path: '/login',
  element: <LayoutRoot isPrivate={false} />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
  ],
};
