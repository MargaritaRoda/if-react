import React from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container } from '../Container';

import { useRedirectUnauthorized } from '../../hooks/useRedirectUnauthorized';

import styles from './HotelPage.module.scss';
export const HotelPage = () => {
  const location = useLocation();
  const { state } = location;

  useRedirectUnauthorized();

  return (
    <>
      <div className={styles.root}>
        <Container>
          <Header />
          <article className={styles.item}>
            <img src={state.imageUrl} alt={state.name} className={styles.img} />
            <div className={styles.title}>{state.name}</div>
            <div
              className={styles.address}
            >{`${state.city} ${state.country}`}</div>
          </article>
        </Container>
      </div>
      <Footer />
    </>
  );
};
