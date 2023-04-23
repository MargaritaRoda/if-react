import React, { useState } from 'react';

import { FormPanel } from '../FormPanel';
import { AdultsFormCounter } from '../AdultsFormCounter';

import styles from './AdultsFormPanel.module.scss';

export const AdultsFormPanel = ({ visible }) => {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(0);

  return (
    <FormPanel className={styles.adultsForm} visible={visible}>
      <AdultsFormCounter
        name="Adults"
        maxValue={10}
        onChange={setAdultsCount}
        value={adultsCount}
      />
      <AdultsFormCounter
        name="Children"
        maxValue={10}
        onChange={setChildrenCount}
        value={childrenCount}
      />
      <AdultsFormCounter
        name="Rooms"
        maxValue={30}
        onChange={setRoomsCount}
        value={roomsCount}
      />
      <div className="adults-form__children adults-form__children--hidden">
        <p className="adults-form__info">
          What is the age of the child you’re travelling with?
        </p>
        <div className="adults-form__children-container"></div>
      </div>
    </FormPanel>
  );
};
