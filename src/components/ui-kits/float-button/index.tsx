import { HashLink } from 'react-router-hash-link';
import styles from './style.module.scss';
import messageIcon from '@/public/assets/message-icon.svg';

export function FloatButton(): React.ReactElement {
  return (
    <HashLink smooth to="#linkForm">
      <img src={messageIcon} alt="messageIcon" className={styles.container} />
    </HashLink>
  );
}
