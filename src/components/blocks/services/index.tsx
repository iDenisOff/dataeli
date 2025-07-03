import ServicesCard from './components/card/card';
import styles from './style.module.scss';

import { Text } from '@/components/ui-kits/text';
import { useTranslation } from 'react-i18next';

export function ServicesBlockView(): React.ReactElement {
  const { t } = useTranslation();
  // length from i18n
  const SERVICE_COUNT = 7;
  return (
    <div className={styles.wrapper}>
      <Text size={'xl'} className={styles.title}>
        {t(`blocks.services.title`)}
      </Text>
      <div className={styles.container}>
        {[...Array(SERVICE_COUNT)].map((_, index) => (
          <div className={styles.containerCard} key={index}>
            <ServicesCard
              key={index}
              title={t(`blocks.services.data.${index}.title`)}
              description={t(`blocks.services.data.${index}.description`)}
              fullDescription={t(
                `blocks.services.data.${index}.fullDescription`
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
