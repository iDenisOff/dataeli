import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import backgroundShapeOne from '@/public/assets/background-shape-one.png';
import { useTranslation } from 'react-i18next';

export default function AboutCompany(): React.ReactElement {
  const { t } = useTranslation();
  const ABOUT_BLOCKS_COUNT = 3;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Text size={'l'} color={'secondary'}>
          {`${t('name')}${' '}`}
        </Text>
        <Text size={'l'}>{t('blocks.about.0.info.subtitle')}</Text>
        <img
          src={backgroundShapeOne}
          alt="backgroundShapeOne"
          className={styles.backgroundImage}
        />
      </div>
      <Text size={'xl'} className={styles.title}>
        {t('blocks.about.0.secondtitle')}
      </Text>
      {[...Array(ABOUT_BLOCKS_COUNT)].map((_, index) => (
        <div key={index}>
          <Text size={'m'} className={styles.text}>
            {t(`blocks.about.0.data.${index}.text`)}
          </Text>
          {index != ABOUT_BLOCKS_COUNT - 1 ? (
            <hr className={styles.line} />
          ) : (
            <div className={styles.lastBlock}></div>
          )}
        </div>
      ))}
    </div>
  );
}
