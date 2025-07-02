import ServicesCard from './components/card/card';
import styles from './style.module.scss';

import { Text } from '@/components/ui-kits/text';
import { servisecData } from './data';

export function ServicesBlockView(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Text size={'xl'} className={styles.title}>
        наши услуги
      </Text>
      <div className={styles.container}>
        {servisecData.map((service, index) => (
          <div className={styles.containerCard} key={index}>
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              fullDescription={service.fullDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
