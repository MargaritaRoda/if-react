import React from 'react';
import styles from './HotelCard.module.scss';

export const HotelCard = ({ city, country, imageUrl, name }) => {
  return (
    <article className={styles.item}>
      <img src={imageUrl} alt={name} className={styles.img} />
      <div className={styles.title}>{name}</div>
      <div className={styles.address}>{`${city} ${country}`}</div>
    </article>
  );
};
