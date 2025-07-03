import styles from './style.module.scss';
import whatsapp from '@/public/assets/whatsapp.svg';
import phone from '@/public/assets/phone.svg';
import telegram from '@/public/assets/telegram.svg';

interface ContactsViewProps {
  withWA?: boolean;
  withTg?: boolean;
  withPhone?: boolean;
}

export function ContactsView(props: ContactsViewProps): React.ReactElement {
  const { withWA = true, withTg = true, withPhone = true } = props;
  return (
    <div className={styles.contacts__items}>
      {withWA ? (
        <a>
          <img src={whatsapp} alt="whatsapp" />
        </a>
      ) : null}
      {withTg ? (
        <a>
          <img src={telegram} alt="telegram" />
        </a>
      ) : null}
      {withPhone ? (
        <a>
          <img src={phone} alt="phone" />
        </a>
      ) : null}
    </div>
  );
}
