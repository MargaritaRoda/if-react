import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';

import { useAvailableHotelsScrollContext } from '../../../contexts/AvailableHotelsScroll.context';
import { getHotelsData } from '../../../services/hotelsData';
import { selectAvailableHotelsFilter } from '../../../store/selectors/availableHotelsFilter.selectors';

export const AvailableHotels = () => {
  const scrollRef = useAvailableHotelsScrollContext();
  const hotelsDataFilter = useSelector(selectAvailableHotelsFilter);

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
