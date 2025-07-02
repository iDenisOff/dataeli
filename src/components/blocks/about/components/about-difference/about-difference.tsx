import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import { aboutDifferenceData } from './data';

export default function AboutDifference(): React.ReactElement {
  return (
    <div className={styles.container}>
      {aboutDifferenceData.map((value, index) => (
        <div key={index} className={styles.block}>
          <div className={styles.blockRow}>
            <Text size={'l'} color={'secondary'} className={styles.title}>
              {value.title}
            </Text>
            <Text size={'xl'} className={styles.textNumber}>
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
