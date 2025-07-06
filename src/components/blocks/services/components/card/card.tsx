import classNames from 'classnames';
import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import React, { useState, useEffect } from 'react';

interface ServicesCardProps {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
}

const NextIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    className={styles.nextButtonIcon}
  >
    <path
      d="M12.9461 8.94829C13.3366 8.55776 13.3366 7.9246 12.9461 7.53407L6.58216 1.17011C6.19164 0.779588 5.55847 0.779588 5.16795 1.17011C4.77742 1.56064 4.77742 2.1938 5.16795 2.58433L10.8248 8.24118L5.16795 13.898C4.77742 14.2886 4.77742 14.9217 5.16795 15.3122C5.55847 15.7028 6.19164 15.7028 6.58216 15.3122L12.9461 8.94829ZM0.239014 8.24118L0.239014 9.24118H12.239V8.24118V7.24118L0.239014 7.24118L0.239014 8.24118Z"
      fill="#F47749"
      fillOpacity="0.5"
    />
  </svg>
);

export default function ServicesCard({
  title,
  description,
  fullDescription,
  image,
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
        <div className={styles.contentWrapper__desktop}>
          <Text size="l" color="secondary" className={styles.title}>
            {title}
          </Text>
          <Text size="m" className={styles.fullDescription}>
            {fullDescription}
          </Text>
        </div>
        <div className={styles.contentWrapper__mobile}>
          <div
            className={classNames(
              styles.slide,
              showFull ? styles.slideOut : styles.slideIn
            )}
          >
            <Text size="l" color="secondary" className={styles.title}>
              {title}
            </Text>
            <div className={styles.contentContainer}>
              <div>
                <Text size="m" className={styles.description}>
                  {description}
                </Text>
              </div>
              <div>
                <img
                  className={styles.contentContainer__img}
                  src={image}
                  alt="Service img"
                />
              </div>
            </div>
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
        </div>
      </div>

      <div
        className={classNames(
          styles.nextButton,
          styles.contentWrapper__mobile,
          showFull ? styles.nextButtonReverse : undefined
        )}
        onClick={handleNextButtonClick}
      >
        <NextIcon />
      </div>
    </div>
  );
}
