import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <div>penis</div>
      </header>
      <main>
        <Suspense fallback={<div>hui</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
