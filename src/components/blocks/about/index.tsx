import styles from './style.module.scss';

import { Text } from '@/components/ui-kits/text';
import AboutCompany from './components/about-company/text-company';
import CoreValues from './components/about-core-values/core-values';
import AboutDifference from './components/about-difference/about-difference';
import AboutAdvantages from './components/about-advantages/about-advantages';
import AboutCommand from './components/about-command/about-command';

export function AboutBlockView(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Text size={'xl'} className={styles.title}>
        о компании
      </Text>
      <AboutCompany />
      <CoreValues />
      <Text size={'xl'} className={styles.title}>
        что нас отличает
      </Text>
      <AboutDifference />
      <Text size={'xl'} className={styles.title}>
        а еще
      </Text>
      <AboutAdvantages />
      <Text size={'xl'} className={styles.title}>
        команда DATAELI
      </Text>
      <AboutCommand />
    </div>
  );
}
