import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';

export default function AboutAdvantages(): React.ReactElement {
  const { t } = useTranslation();
  // length from i18n
  const ABOUT_ADV_COUNT = 3;
  return (
    <div className={styles.container}>
      {[...Array(ABOUT_ADV_COUNT)].map((_, index) => (
        <div key={index} className={styles.block}>
          <div className={styles.blockRow}>
            <Text size={'l'} className={styles.title}>
              {t(`blocks.about.3.data.${index}.title`)}
            </Text>
            <Text size={'xl'} color={'secondary'} className={styles.textNumber}>
              {t(`blocks.about.3.data.${index}.number`)}
            </Text>
          </div>
          <Text size={'m'} className={styles.text}>
            {t(`blocks.about.3.data.${index}.text`)}
          </Text>
        </div>
      ))}
    </div>
  );
}
