import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './HotelCard.module.scss';
export const HotelCard = ({ city, country, imageUrl, name, id }) => {
  return (
    <article className={styles.item}>
      <NavLink to={`/hotels/${id}`} state={{ city, country, imageUrl, name }}>
        <img src={imageUrl} alt={name} className={styles.img} />
        <div className={styles.title}>{name}</div>
      </NavLink>
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
