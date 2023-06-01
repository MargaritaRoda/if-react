import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';

import { useAvailableHotelsScrollContext } from '../../../contexts/AvailableHotelsScroll.context';

import { selectAvailableHotelsFilter } from '../../../store/selectors/availableHotelsFilter.selectors';
import { useGetHotelsQuery } from '../../../store/slicers/apiSlice';

export const AvailableHotels = () => {
  const scrollRef = useAvailableHotelsScrollContext();
  const hotelsDataFilter = useSelector(selectAvailableHotelsFilter);

  const { data: items, isLoading } = useGetHotelsQuery(hotelsDataFilter, {
    skip: !hotelsDataFilter,
  });

  if (!hotelsDataFilter) {
    return null;
  }

  return (
    <section className={styles.section} ref={scrollRef}>
      <Container className={styles.container}>
        <Title className={styles.title}>Available hotels</Title>
        <HotelsList items={items} isLoading={isLoading} />
      </Container>
    </section>
  );
};
