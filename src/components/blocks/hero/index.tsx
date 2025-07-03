import { MainButton } from '@/components/ui-kits/main-button';
import styles from './style.module.scss';
import heroLogo from '@/public/assets/hero-logo.svg';
import { HeroTitle } from '@/components/blocks/hero/components/hero-title/hero-title';
import { Text } from '@/components/ui-kits/text';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export function HeroBlockView(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.banner}>
          <HeroTitle />
          <HashLink smooth to="#linkForm">
            <MainButton className={styles.button}>
              <Text color="secondary" size="m">
                {t('blocks.hero.main_btn')}
              </Text>
            </MainButton>
          </HashLink>
        </div>
        <div className={styles.heroLogo}>
          <img
            src={heroLogo}
            alt="hero-logo"
            className={styles.heroLogoImage}
          />
        </div>
      </div>
    </>
  );
}
