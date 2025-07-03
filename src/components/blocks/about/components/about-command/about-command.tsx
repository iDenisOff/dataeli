import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import { useTranslation } from 'react-i18next';

export default function AboutCommand(): React.ReactElement {
  const { t } = useTranslation();
  // length from i18n
  const ABOUT_COMMAND_COUNT = 4;
  return (
    <div className={styles.container}>
      <Text size={'m'} className={styles.block}>
        {t(`blocks.about.4.preinfo`)}
      </Text>
      <div className={styles.block}>
        {[...Array(ABOUT_COMMAND_COUNT)].map((_, index) => (
          <Text key={index} size={'m'} className={styles.point}>
            {t(`blocks.about.4.data.${index}.text`)}
          </Text>
        ))}
      </div>
      <Text size={'m'} className={styles.block}>
        {t(`blocks.about.4.postinfo`)}
      </Text>
    </div>
  );
}
