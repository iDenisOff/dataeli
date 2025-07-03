import { HashLink } from 'react-router-hash-link';

import styles from './style.module.scss';
import logo from '@/public/assets/logo.svg';
import burger from '@/public/assets/burger.svg';
import cross from '@/public/assets/cross.svg';
import { useState } from 'react';
import { Text } from '../ui-kits/text';
import { ContactsView } from '../contacts';

const menuData = [
  {
    title: 'услуги',
    hashFragment: 'services',
  },
  {
    title: 'о компании',
    hashFragment: 'about',
  },
  {
    title: 'этапы работы',
    hashFragment: 'stages',
  },
  {
    title: 'обратиться',
    hashFragment: 'linkForm',
  },
];

export function HeaderView(): React.ReactElement {
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
              <Text>{item.title}</Text>
            </div>
          </HashLink>
        ))}
        <div className={styles.burgerList__footer}>
          <div>
            <Text>+7 999 99 99</Text>
          </div>
          <div>
            <ContactsView withPhone={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
