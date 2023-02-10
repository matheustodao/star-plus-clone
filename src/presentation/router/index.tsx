import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { RoutingLogin } from './routes/login';
import { RoutingSignUp, RoutingSignUpIndex } from './routes/sign-up';

const routes = createBrowserRouter([
  RoutingLogin,
  RoutingSignUp,
  RoutingSignUpIndex,
]);

export function Routes() {
  return <RouterProvider router={routes} />;
}
