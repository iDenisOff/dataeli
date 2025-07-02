import styles from './style.module.scss';
import logo from '../../assets/logo.svg';
import whatsapp from '../../assets/whatsapp.svg';
import phone from '../../assets/phone.svg';
import telegram from '../../assets/telegram.svg';
import burger from '../../assets/burger.svg';

export function HeaderView(): React.ReactElement {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Логотип" className={styles.logo} />
      <div className={styles.contacts}>
        <img src={whatsapp} alt="whatsapp" />
        <img src={telegram} alt="telegram" />
        <img src={phone} alt="phone" />
      </div>
      <img src={burger} alt="burger" className={styles.burger} />
    </div>
  );
}
