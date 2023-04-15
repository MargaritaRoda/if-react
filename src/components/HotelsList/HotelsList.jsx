import React from 'react';
import styles from './HotelsList.module.scss';
import { HotelCard } from '../HotelCard';
import { Arrow } from '../Arrow';

export const HotelsList = ({ items }) => {
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
