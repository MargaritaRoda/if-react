import React, { Suspense } from 'react';

import { HotelCard } from '../HotelCard';
import { Arrow } from '../Arrow';
import { Loading } from '../Loading';
import { wrapPromise } from '../../lib/wrapPromise';

import styles from './HotelsList.module.scss';

export const InnerHotelsList = ({ itemsPromise }) => {
  const items = wrapPromise(itemsPromise);

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

export const HotelsList = ({ itemsPromise }) => {
  if (!itemsPromise) {
    return null;
  }
  return (
    <Suspense fallback={<Loading />}>
      <InnerHotelsList itemsPromise={itemsPromise} />
    </Suspense>
  );
};
