import React from 'react';
import { dataImages } from './data/data';
import { Text } from '../../ui-kits/text';
import styles from './style.module.scss';
import { StageCard } from './components/stage-card';
import { StageResultCard } from './components/stage-result-card';
import { useTranslation } from 'react-i18next';

export function StagesBlock(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div>
        <Text size={'xl'} className={styles.title}>
          {t(`blocks.stages.title`)}
        </Text>
      </div>
      {dataImages.map((item, index) => (
        <StageCard
          key={index}
          item={{
            number: t(`blocks.stages.prepare.${index}.number`),
            title: t(`blocks.stages.prepare.${index}.title`),
            subtitle: t(`blocks.stages.prepare.${index}.subtitle`),
            image: item.image,
          }}
        />
      ))}
      <StageResultCard />
    </div>
  );
}
