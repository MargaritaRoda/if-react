import React from 'react';

import { FormPanel } from '../FormPanel';
import { AdultsFormCounter } from '../AdultsFormCounter';
import { ChildrenAgePanel } from '../ChildrenAgePannel/ChildrenAgePanel';

import { useTopSectionFormContext } from '../../contexts/TopSectionForm.context';

import styles from './AdultsFormPanel.module.scss';

export const AdultsFormPanel = ({ visible }) => {
  const {
    adultsCount,
    setAdultsCount,
    childrenCount,
    setChildrenCount,
    roomsCount,
    setRoomsCount,
  } = useTopSectionFormContext();

  return (
    <FormPanel className={styles.adultsForm} visible={visible}>
      <AdultsFormCounter
        name="Adults"
        maxValue={10}
        minValue={1}
        onChange={setAdultsCount}
        value={adultsCount}
      />
      <AdultsFormCounter
        name="Children"
        maxValue={10}
        minValue={0}
        onChange={setChildrenCount}
        value={childrenCount}
      />
      <AdultsFormCounter
        name="Rooms"
        maxValue={30}
        minValue={1}
        onChange={setRoomsCount}
        value={roomsCount}
      />

      <ChildrenAgePanel value={childrenCount} onChange={setChildrenCount} />
    </FormPanel>
  );
};
