import React from 'react';
import { HeaderView } from '../header';
import styles from './style.module.scss';
import { FooterView } from '../footer';
import { FloatButton } from '../ui-kits/float-button';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className={styles.layout}>
      <HeaderView />
      <main className={styles.main}>{children}</main>
      <FooterView />
      <FloatButton />
    </div>
  );
}
