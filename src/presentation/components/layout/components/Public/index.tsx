import { Outlet } from 'react-router-dom';

export function PublicLayout() {
  return (
    <>
      <header>
        <h2>Star Plus</h2>
      </header>

      <Outlet />
    </>
  );
}
