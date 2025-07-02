import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import { coreValuesData } from './data';

export default function CoreValues({}): React.ReactElement {
  return (
    <div className={styles.container}>
      {coreValuesData.map((value, index) => (
        <div key={index} className={styles.block}>
          <Text size={'l'} color={'secondary'} className={styles.title}>
            {value.title}
          </Text>
          <Text size={'m'} className={styles.text}>
            {value.text}
          </Text>
        </div>
      ))}
    </div>
  );
}
