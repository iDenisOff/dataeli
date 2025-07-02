import styles from './style.module.scss';
import logo from '../../assets/logo.svg';
import whatsapp from '../../assets/whatsapp-white.svg';
import telegram from '../../assets/telegram-white.svg';
import { Text } from '@/components/ui-kits/text';

export function FooterView(): React.ReactElement {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Логотип" className={styles.logo} />
      <div className={styles.info}>
        <div className={styles.contacts}>
          <Text size={'m'}>
            <a href="tel:+74997148152">+7 499 714 81 52</a>
          </Text>
          <Text size={'m'}>support@dataeli.com</Text>
          <div className={styles.contactsIconContainer}>
            <img
              src={whatsapp}
              alt="whatsapp"
              className={styles.contactsIconContainerIcon}
            />
            <img
              src={telegram}
              alt="telegram"
              className={styles.contactsIconContainerIcon}
            />
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <Text size={'s'}>ИНН 7751199784</Text>
          <Text size={'s'}>ООО “ДЭЙТЛИ”</Text>
          <Text size={'s'}>ОГРН 1217700284042</Text>
        </div>
      </div>
    </div>
  );
}
