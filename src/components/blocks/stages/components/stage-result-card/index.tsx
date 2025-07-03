import { Text } from '../../../../ui-kits/text';
import styles from './style.module.scss';
import resultImg from './images/result.png';
import { useTranslation } from 'react-i18next';

export function StageResultCard(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div>
          <Text color="secondary" size="xl">
            {t(`blocks.stages.result.number`)}
          </Text>
        </div>
        <div>
          <Text size="xl">{t(`blocks.stages.result.title`)}</Text>
        </div>
      </div>
      <div className={styles.notesContainer}>
        <div className={styles.notesBox}>
          <div>
            <Text>
              <Text color="secondary">
                {t(`blocks.stages.result.notes1_1`)}
              </Text>
              {t(`blocks.stages.result.notes1_2`)}
            </Text>
          </div>
          <div>
            <Text>
              {t(`blocks.stages.result.notes2_1`)}
              <Text color="secondary">
                {t(`blocks.stages.result.notes2_2`)}
              </Text>
              {t(`blocks.stages.result.notes2_3`)}
            </Text>
          </div>
        </div>
        <div>
          <img src={resultImg} className={styles.imageBlock} />
        </div>
      </div>
    </div>
  );
}
