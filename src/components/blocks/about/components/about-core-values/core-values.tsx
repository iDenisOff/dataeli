import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';

export default function CoreValues({}): React.ReactElement {
  const { t } = useTranslation();
  const CORE_VALUES_COUNT = 3;
  return (
    <div className={styles.container}>
      {[...Array(CORE_VALUES_COUNT)].map((_, index) => (
        <div key={index} className={styles.block}>
          <Text size={'l'} color={'secondary'} className={styles.title}>
            {t(`blocks.about.1.data.${index}.title`)}
          </Text>
          <Text size={'m'} className={styles.text}>
            {t(`blocks.about.1.data.${index}.text`)}
          </Text>
        </div>
      ))}
    </div>
  );
}
