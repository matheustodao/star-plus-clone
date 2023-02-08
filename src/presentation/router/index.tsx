import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { LoginRouting } from './routes/login';
import { SignUpRouting } from './routes/sign-up';

const routes = createBrowserRouter([LoginRouting, SignUpRouting]);

export function Routes() {
  return <RouterProvider router={routes} />;
}
