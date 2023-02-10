import { LayoutRoot } from '@presentation/components/shared/Layout';
import { SignUpPage } from '@presentation/pages/sign-up';
import { SignUpPasswordPage } from '@presentation/pages/sign-up/subpages/PasswordPage';
import { SubscriberAgreementReview } from '@presentation/pages/sign-up/subpages/subscriber-agreement-review';
import { RouteObject } from 'react-router-dom';

export const RoutingSignUpIndex: RouteObject = {
  path: '/sign-up',
  element: <LayoutRoot layout="public/sign-up" />,
  children: [
    {
      index: true,
      element: <SignUpPage />,
    },
  ],
};

export const RoutingSignUp: RouteObject = {
  path: '/sign-up',
  element: <LayoutRoot />,
  children: [
    {
      path: 'password',
      element: <SignUpPasswordPage />,
    },

    {
      path: 'subscriber-agreement-review',
      element: <SubscriberAgreementReview />,
    },
  ],
};
