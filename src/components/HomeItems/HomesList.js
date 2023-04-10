import React from 'react';
import classNames from 'classnames';
import styles from './HomesList.module.scss';
import { HomeItemArticle } from './HomeItemArticle';

export const HomesList = ({ className, title, hotelsItems }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.slider}>
        <div className={styles.items}>
          {hotelsItems.map((hotel) => {
            return <HomeItemArticle key={hotel.id} {...hotel} />;
          })}
        </div>
        <div className={styles.sliderNext}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  );
};
