import ServicesCard from './components/card/card';
import styles from './style.module.scss';

import { Text } from '@/components/ui-kits/text';
import { useTranslation } from 'react-i18next';

import service1img from '@/public/assets/services/1.svg';
import service2img from '@/public/assets/services/2.svg';
import service3img from '@/public/assets/services/3.svg';
import service4img from '@/public/assets/services/4.svg';
import service5img from '@/public/assets/services/5.svg';
import service6img from '@/public/assets/services/6.svg';
import service7img from '@/public/assets/services/7.svg';

export function ServicesBlockView(): React.ReactElement {
  const { t } = useTranslation();
  // length from i18n
  const serviceImages = [
    service1img,
    service2img,
    service3img,
    service4img,
    service5img,
    service6img,
    service7img,
  ];
  return (
    <div className={styles.wrapper}>
      <Text size={'xl'} className={styles.title}>
        {t(`blocks.services.title`)}
      </Text>
      <div className={styles.container}>
        {serviceImages.map((img, index) => (
          <div className={styles.containerCard} key={index}>
            <ServicesCard
              key={index}
              title={t(`blocks.services.data.${index}.title`)}
              description={t(`blocks.services.data.${index}.description`)}
              fullDescription={t(
                `blocks.services.data.${index}.fullDescription`
              )}
              image={img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
