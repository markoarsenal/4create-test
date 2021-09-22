import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link href="/">
          <a href="/">Home</a>
        </Link>
        <Link href="/edit">
          <a href="/edit">Edit</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
