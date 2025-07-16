import React from 'react';
import Slider from 'react-slick';
import styles from './style.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { newsLinks } from '../../data';
import { useTranslation } from 'react-i18next';
import { SliderCard } from '../slider-card/slider-card';
function SimpleSlider() {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    appendDots: (dots: string) => <div className={styles.dots}>{dots}</div>,
    customPaging: () => <div className={styles.dot}>.</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {newsLinks.map((link, index) => (
          <SliderCard
            key={index}
            date={t(`blocks.news.data.${index}.date`)}
            text={t(`blocks.news.data.${index}.text`)}
            link={link}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
