import { LayoutRoot } from '@presentation/components/layout';
import { LoginPage } from '@presentation/pages/login';
import { RouteObject } from 'react-router-dom';

export const LoginRouting: RouteObject = {
  path: '/login',
  element: <LayoutRoot isPrivate={false} />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
  ],
};
