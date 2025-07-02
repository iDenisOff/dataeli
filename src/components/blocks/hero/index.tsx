import { MainButton } from '@/components/ui-kits/main-button';
import styles from './style.module.scss';
import heroLogo from '../../../assets/hero-logo.svg';
import { HeroTitle } from '@/components/blocks/hero/components/hero-title/hero-title';
import { Text } from '@/components/ui-kits/text';

export function HeroBlockView(): React.ReactElement {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.banner}>
          <HeroTitle />
          <MainButton className={styles.button}>
            <Text color="secondary" size="m">
              обратиться к нам
            </Text>
          </MainButton>
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
