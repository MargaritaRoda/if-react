import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRedirectUnauthorized } from '../../hooks/useRedirectUnauthorized';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useStyles } from './HotelPage.styles';

export const HotelPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { state } = location;

  useRedirectUnauthorized();

  return (
    <>
      <Header>
        <article className={classes.root}>
          <img src={state.imageUrl} alt={state.name} className={classes.img} />
          <div className={classes.title}>{state.name}</div>
          <div
            className={classes.address}
          >{`${state.city} ${state.country}`}</div>
        </article>
      </Header>
      <Footer />
    </>
  );
};
