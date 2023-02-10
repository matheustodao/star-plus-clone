import { Footer } from '@shared/Footer';
import { HeaderPublicSignUpForm } from '@shared/Header/Public/SignUpForm';
import { Outlet } from 'react-router';

export function LayoutSignUpPublic() {
  return (
    <>
      <HeaderPublicSignUpForm />

      <Outlet />

      <Footer />
    </>
  );
}
