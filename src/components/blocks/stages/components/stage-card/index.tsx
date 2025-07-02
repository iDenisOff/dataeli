import { Text } from '../../../../ui-kits/text';
import { IStage } from '../../types';
import styles from './style.module.scss';

interface StageCardProps {
  item: IStage;
}

export function StageCard(props: StageCardProps): React.ReactElement {
  const { item } = props;
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div>
          <Text color="secondary" size="xl">
            {item.number}
          </Text>
        </div>
        <div>
          <Text size="l">{item.title}</Text>
        </div>
        <div>
          <Text>{item.subtitle}</Text>
        </div>
      </div>
      <div>
        <img src={item.image} className={styles.imageBlock} />
      </div>
    </div>
  );
}
