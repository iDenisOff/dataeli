import { Text } from '@/components/ui-kits/text';
import styles from './style.module.scss';

export function HeroTitle(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Text size="xl">насколько вы уверены</Text>
      <div>
        <Text size="xl">
          в{' '}
          <Text size="xl" color="secondary">
            безопасности
          </Text>
        </Text>
      </div>
      <Text size="xl">собственных информационных ресурсов?</Text>
    </div>
  );
}
