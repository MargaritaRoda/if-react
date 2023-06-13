import React from 'react';

import { HotelCard } from '../HotelCard';
import { Arrow } from '../Arrow';
import { Loading } from '../Loading';

import styles from './HotelsList.module.scss';

export const HotelsList = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.slider}>
        <Loading className={styles.loading} />
      </div>
    );
  }
  if (!items.length) {
    return (
      <div className={styles.slider}>
        <p className={styles.emptyText}>Hotels not Found</p>
      </div>
    );
  }

  return (
    <div className={styles.slider}>
      <div className={styles.items}>
        {items.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>
      <Arrow />
    </div>
  );
};

HotelsList.defaultProps = {
  items: [],
};
