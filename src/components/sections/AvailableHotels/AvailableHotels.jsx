import React from 'react';
import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';

import { useAvailableHotelsContext } from '../../../contexts/AvailableHotels.context';
import { getHotelsData } from '../../../services/hotelsData';

export const AvailableHotels = () => {
  const { hotelsDataFilter, scrollRef } = useAvailableHotelsContext();
  const itemsPromise = hotelsDataFilter
    ? getHotelsData(hotelsDataFilter)
    : null;

  if (!itemsPromise) {
    return null;
  }

  return (
    <section className={styles.section} ref={scrollRef}>
      <Container className={styles.container}>
        <Title className={styles.title}>Available hotels</Title>
        <HotelsList itemsPromise={itemsPromise} />
      </Container>
    </section>
  );
};
