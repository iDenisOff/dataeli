import styles from './style.module.scss';
import logo from '@/public/assets/logo.svg';
import { Text } from '@/components/ui-kits/text';
import { ContactsView } from '../contacts';
import { useTranslation } from 'react-i18next';

export function FooterView(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <img src={logo} alt="Логотип" className={styles.logo} />
      <div className={styles.info}>
        <div className={styles.contacts}>
          <div className={styles.contactsIconContainer}>
            <ContactsView withPhone={false} size="xl" />
          </div>
          <Text size={'m'}>
            <a href="tel:+74997148152">+7 499 714 81 52</a>
          </Text>
          <Text size={'m'}>support@dataeli.com</Text>
        </div>
        <div className={styles.additionalInfo}>
          <Text size={'s'}>{t('blocks.footer.tin')} 7751199784</Text>
          <Text size={'s'}>{t('blocks.footer.llc')} “DATAELI”</Text>
          <Text size={'s'}>{t('blocks.footer.psrn')} 1217700284042</Text>
        </div>
      </div>
    </div>
  );
}
