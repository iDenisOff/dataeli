import React from 'react';
import { HeaderView } from '../header';
import styles from './style.module.scss';
import { FooterView } from '../footer';
import messageIcon from '../../assets/message-icon.svg';
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className={styles.layout}>
      <HeaderView />
      <main className={styles.main}>{children}</main>
      <FooterView />
      <img
        src={messageIcon}
        alt="messageIcon"
        className={styles.messageButton}
      />
    </div>
  );
}
