import styles from './style.module.scss';
import whatsapp from '@/public/assets/whatsapp.svg';
import phone from '@/public/assets/phone.svg';
import telegram from '@/public/assets/telegram.svg';

type ContactButtonSize = 'sm' | 'xl';

interface ContactsViewProps {
  withWA?: boolean;
  withTg?: boolean;
  withPhone?: boolean;

  size?: ContactButtonSize;
}

const buttonSizeMap: Record<ContactButtonSize, number> = {
  sm: 30,
  xl: 50,
};

export function ContactsView(props: ContactsViewProps): React.ReactElement {
  const { withWA = true, withTg = true, withPhone = true, size = 'sm' } = props;
  return (
    <div className={styles.contacts__items}>
      {withWA ? (
        <a href="https://wa.me/message/VTRZEEGVSP6KH1">
          <img src={whatsapp} height={buttonSizeMap[size]} alt="whatsapp" />
        </a>
      ) : null}
      {withTg ? (
        <a href="https://t.me/dataeli">
          <img src={telegram} height={buttonSizeMap[size]} alt="telegram" />
        </a>
      ) : null}
      {withPhone ? (
        <a href="tel:+74997148152">
          <img src={phone} height={buttonSizeMap[size]} alt="phone" />
        </a>
      ) : null}
    </div>
  );
}
