import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import { aboutAdvantagesData } from './data';

export default function AboutAdvantages(): React.ReactElement {
  return (
    <div className={styles.container}>
      {aboutAdvantagesData.map((value, index) => (
        <div key={index} className={styles.block}>
          <div className={styles.blockRow}>
            <Text size={'l'} className={styles.title}>
              {value.title}
            </Text>
            <Text size={'xl'} color={'secondary'} className={styles.textNumber}>
              {value.number}
            </Text>
          </div>
          <Text size={'m'} className={styles.text}>
            {value.text}
          </Text>
        </div>
      ))}
    </div>
  );
}
