import { Text } from '@/components/ui-kits/text';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export function HeroTitle(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Text size="xl">{t('blocks.hero.title1')}</Text>
      <div>
        <Text size="xl">
          {t('blocks.hero.title2')}
          <Text size="xl" color="secondary">
            {t('blocks.hero.title3')}
          </Text>
        </Text>
      </div>
      <Text size="xl">{t('blocks.hero.title4')}</Text>
    </div>
  );
}
