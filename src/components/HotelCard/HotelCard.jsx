import React from 'react';
import PropTypes from 'prop-types';
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

HotelCard.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
