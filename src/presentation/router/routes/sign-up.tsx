import { LayoutRoot } from '@presentation/components/layout';
import { SignUpPage } from '@presentation/pages/sign-up';
import { SignUpPasswordPage } from '@presentation/pages/sign-up/subpages/PasswordPage';
import { RouteObject } from 'react-router-dom';

export const SignUpRouting: RouteObject = {
  path: '/sign-up',
  element: <LayoutRoot layout="public" roles="admin" />,
  children: [
    {
      index: true,
      element: <SignUpPage />,
    },

    {
      path: 'password',
      element: <SignUpPasswordPage />,
    },
  ],
};
