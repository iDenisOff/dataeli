import classNames from 'classnames';
import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import React, { useState, useEffect } from 'react';

interface ServicesCardProps {
  title: string;
  description: string;
  fullDescription: string;
}

const NextIcon = () => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.nextButtonIcon}
  >
    <path
      d="M0.833386 21C0.833386 21 18.7778 13 18.7778 11C18.7778 9 0.833387 0.999999 0.833387 0.999999"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default function ServicesCard({
  title,
  description,
  fullDescription,
}: ServicesCardProps): React.ReactElement {
  const [showFull, setShowFull] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNextButtonClick = () => {
    if (animating || isLargeScreen) return;
    setAnimating(true);
    setTimeout(() => {
      setShowFull((prev) => !prev);
      setAnimating(false);
    }, 0);
  };

  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        {isLargeScreen ? (
          <>
            <Text size="l" color="secondary" className={styles.title}>
              {title}
            </Text>
            <Text size="m" className={styles.fullDescription}>
              {fullDescription}
            </Text>
          </>
        ) : (
          <>
            <div
              className={classNames(
                styles.slide,
                showFull ? styles.slideOut : styles.slideIn
              )}
            >
              <Text size="l" color="secondary" className={styles.title}>
                {title}
              </Text>
              <Text size="m" className={styles.description}>
                {description}
              </Text>
            </div>
            <div
              className={classNames(
                styles.slide,
                showFull ? styles.slideIn : styles.fullSlide
              )}
            >
              <Text size="m" className={styles.fullDescription}>
                {fullDescription}
              </Text>
            </div>
          </>
        )}
      </div>

      {!isLargeScreen && (
        <div className={styles.nextButton} onClick={handleNextButtonClick}>
          <NextIcon />
        </div>
      )}
    </div>
  );
}
