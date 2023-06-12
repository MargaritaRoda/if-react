import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useStyles } from './HotelCard.styles';

export const HotelCard = ({ city, country, imageUrl, name, id }) => {
  const classes = useStyles();
  return (
    <article className={classes.item}>
      <NavLink to={`/hotels/${id}`} state={{ city, country, imageUrl, name }}>
        <img src={imageUrl} alt={name} className={classes.img} />
        <div className={classes.title}>{name}</div>
      </NavLink>
      <div className={classes.address}>{`${city} ${country}`}</div>
    </article>
  );
};

HotelCard.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
