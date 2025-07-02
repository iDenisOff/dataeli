import React from 'react';
import { data } from './data/data';
import { Text } from '../../ui-kits/text';
import styles from './style.module.scss';
import { StageCard } from './components/stage-card';
import { StageResultCard } from './components/stage-result-card';

export function StagesBlock(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div>
        <Text size={'xl'} className={styles.title}>
          этапы работы
        </Text>
      </div>
      {data.map((item, index) => (
        <StageCard key={index} item={item} />
      ))}
      <StageResultCard />
    </div>
  );
}
