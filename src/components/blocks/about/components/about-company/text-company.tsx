import styles from './style.module.scss';
import { Text } from '@/components/ui-kits/text';
import backgroundShapeOne from '@/assets/background-shape-one.png';
import { aboutCompanyData } from './data';

export default function AboutCompany(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Text size={'l'} color={'secondary'}>
          DATAELI{' '}
        </Text>
        <Text size={'l'}>
          — это команда специалистов и исследователей, сосредоточенных на
          практическом обеспечении информационной безопасности
        </Text>
        <img
          src={backgroundShapeOne}
          alt="backgroundShapeOne"
          className={styles.backgroundImage}
        />
      </div>
      <Text size={'xl'} className={styles.title}>
        почему мы
      </Text>
      {aboutCompanyData.map((element, index) => (
        <div key={index}>
          <Text size={'m'} className={styles.text}>
            {element.text}
          </Text>
          {index != aboutCompanyData.length - 1 ? (
            <hr className={styles.line} />
          ) : (
            <div className={styles.lastBlock}></div>
          )}
        </div>
      ))}
    </div>
  );
}
