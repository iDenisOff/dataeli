import styles from './style.module.scss';

import { Text } from '@/components/ui-kits/text';
import AboutCompany from './components/about-company/text-company';
import CoreValues from './components/about-core-values/core-values';
import AboutDifference from './components/about-difference/about-difference';
import AboutAdvantages from './components/about-advantages/about-advantages';
import AboutCommand from './components/about-command/about-command';
import { useTranslation } from 'react-i18next';

export function AboutBlockView(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Text size={'xl'} className={styles.title}>
        {t('blocks.about.0.title')}
      </Text>
      <AboutCompany />
      <CoreValues />
      <Text size={'xl'} className={styles.title}>
        {t('blocks.about.2.title')}
      </Text>
      <AboutDifference />
      <Text size={'xl'} className={styles.title}>
        {t('blocks.about.3.title')}
      </Text>
      <AboutAdvantages />
      <Text size={'xl'} className={styles.title}>
        {t('blocks.about.4.title')}
      </Text>
      <AboutCommand />
    </div>
  );
}
