import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import { useTranslation } from 'react-i18next';

export default function AboutDifference(): React.ReactElement {
  const { t } = useTranslation();
  // length from i18n
  const ABOUT_DIFF_COUNT = 3;
  return (
    <div className={styles.container}>
      {[...Array(ABOUT_DIFF_COUNT)].map((_, index) => (
        <div key={index} className={styles.block}>
          <div className={styles.blockRow}>
            <Text size={'l'} color={'secondary'} className={styles.title}>
              {t(`blocks.about.2.data.${index}.title`)}
            </Text>
            <Text size={'xl'} className={styles.textNumber}>
              {t(`blocks.about.2.data.${index}.number`)}
            </Text>
          </div>
          <Text size={'m'} className={styles.text}>
            {t(`blocks.about.2.data.${index}.text`)}
          </Text>
        </div>
      ))}
    </div>
  );
}
