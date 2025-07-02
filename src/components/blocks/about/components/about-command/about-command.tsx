import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import { aboutCommandData } from './data';

export default function AboutCommand(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Text size={'m'} className={styles.block}>
        ключевая особенность нашей компании в специалистах с реальным
        практическим опытом в сфере кибербезопасности
      </Text>
      <div className={styles.block}>
        {aboutCommandData.map((value, index) => (
          <Text key={index} size={'m'} className={styles.point}>
            {value.text}
          </Text>
        ))}
      </div>
      <Text size={'m'} className={styles.block}>
        мы постоянно учимся, делимся знаниями и оттачиваем мастерство, чтобы
        оставаться на передовой цифровой безопасности
      </Text>
    </div>
  );
}
