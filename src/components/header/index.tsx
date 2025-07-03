import { HashLink } from 'react-router-hash-link';

import styles from './style.module.scss';
import logo from '@/public/assets/logo.svg';
import burger from '@/public/assets/burger.svg';
import cross from '@/public/assets/cross.svg';
import { useState } from 'react';
import { Text } from '../ui-kits/text';
import { ContactsView } from '../contacts';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../ui-kits/language-switcher';

const menuData = [
  {
    hashFragment: 'services',
  },
  {
    hashFragment: 'about',
  },
  {
    hashFragment: 'stages',
  },
  {
    hashFragment: 'linkForm',
  },
];

export function HeaderView(): React.ReactElement {
  const { t } = useTranslation();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  function handleToggleMenu(): void {
    setOpenMenu((value) => !value);
  }

  return (
    <div>
      <div className={styles.container}>
        <img src={logo} alt="Логотип" className={styles.logo} />
        <div className={styles.contacts__container}>
          <ContactsView />
          <div className={styles.contacts__container__switch}>
            <LanguageSwitcher />
          </div>
        </div>
        <img
          src={isOpenMenu ? cross : burger}
          alt="menu-btn"
          className={styles.burger}
          onClick={handleToggleMenu}
        />
      </div>
      <div className={styles.burgerList} data-open={isOpenMenu}>
        {menuData.map((item, index) => (
          <HashLink smooth to={`#${item.hashFragment}`} key={index}>
            <div className={styles.burgerList__item}>
              <Text>{t(`menu.${item.hashFragment}`)}</Text>
            </div>
          </HashLink>
        ))}
        <div className={styles.burgerList__footer}>
          <div className={styles.burgerList__footer__contact}>
            <ContactsView />
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
