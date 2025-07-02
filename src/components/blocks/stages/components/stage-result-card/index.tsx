import { Text } from '../../../../ui-kits/text';
import styles from './style.module.scss';
import resultImg from './images/result.png';

export function StageResultCard(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div>
          <Text color="secondary" size="xl">
            04
          </Text>
        </div>
        <div>
          <Text size="xl">
            по результатам проведенных мероприятий предоставляем два отчета
          </Text>
        </div>
      </div>
      <div className={styles.notesContainer}>
        <div className={styles.notesBox}>
          <div>
            <Text>
              <Text color="secondary">детальный технический,</Text> содержащий
              подробное описание проведенных мероприятий, выявленных недостатков
              и рекомендаций по их устранению
            </Text>
          </div>
          <div>
            <Text>
              высокоуровневый <Text color="secondary">для руководства,</Text>
              содержащий основные выводы и результаты о проведенных мероприятиях
              по оценке защищенности
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
