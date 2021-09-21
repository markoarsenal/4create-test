import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/edit">
          <a>Edit</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
