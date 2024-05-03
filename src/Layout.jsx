import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from 'components/nav/Nav';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Nav />
      </header>
      <main className={css.body}>
        <Suspense fallback={<div>hui</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
