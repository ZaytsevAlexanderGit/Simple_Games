import { Outlet } from 'react-router';
import { MainWrapper } from '../../ui/main-wrapper';
import { PageLayout } from '../../ui/page-layout';

// import styles from './styles.module.css';

export function Layout() {
  return (
    <MainWrapper>
      <main>
        <PageLayout content={<Outlet />} />
      </main>
    </MainWrapper>
  );
}
