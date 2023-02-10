import { Footer } from '@shared/Footer';
import { HeaderPublic } from '@shared/Header/Public/Default';
import { Outlet } from 'react-router-dom';

export function LayoutPublic() {
  return (
    <>
      <HeaderPublic />

      <Outlet />

      <Footer />
    </>
  );
}
