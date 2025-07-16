import React from 'react';
import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import externalLink from '@/public/assets/external-link.svg';

interface SliderCardProps {
  date: string;
  text: string;
  link: string;
}

export function SliderCard({ date, text, link }: SliderCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Text className={styles.title} size={'m'} color={'secondary'}>
          {date}
        </Text>
        <a href={link} className={styles.link}>
          <img src={externalLink} alt="link" className={styles.linkIcon} />
        </a>
      </div>
      <Text className={styles.text}>{text}</Text>
    </div>
  );
}
