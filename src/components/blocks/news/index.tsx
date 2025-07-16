import styles from './style.module.scss';

import { Text } from '@/components/ui-kits/text';
import { useTranslation } from 'react-i18next';
import SimpleSlider from './components/slider/slider';

export function NewsBlockView(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Text className={styles.title} size="xl">
        {t(`blocks.news.title`)}
      </Text>
      <SimpleSlider />
    </div>
  );
}
