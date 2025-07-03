import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './style.module.scss';
import ruIcon from '@/public/assets/ru.png';
import enIcon from '@/public/assets/en.png';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lng } = useParams();

  const languages = [
    { code: 'ru', label: 'RU', image: ruIcon },
    { code: 'en', label: 'EN', image: enIcon },
  ];

  const handleLanguageChange = (languageCode: string) => {
    const nextLanguageIndex =
      (languages.findIndex((item) => item.code == languageCode) + 1) %
      languages.length;
    const nextLanguage = languages[nextLanguageIndex];
    i18n.changeLanguage(nextLanguage.code).then(() => {
      navigate(`/${nextLanguage.code}`);
    });
  };

  return (
    <div className={styles.container}>
      {languages
        .filter((langItem) => lng === langItem.code)
        .map((langItem) => (
          <div key={langItem.code}>
            <button
              className={`${styles.swicthButton} ${
                lng === langItem.code ? styles.active : ''
              }`}
              onClick={() => handleLanguageChange(langItem.code)}
            >
              <img src={langItem.image} />
              {langItem.label}
            </button>
          </div>
        ))}
    </div>
  );
};
