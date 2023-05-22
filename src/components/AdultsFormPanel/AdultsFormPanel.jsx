import React, { memo } from 'react';

import { FormPanel } from '../FormPanel';
import { AdultsFormCounter } from '../AdultsFormCounter';
import { ChildrenAgePanel } from '../ChildrenAgePannel';

import styles from './AdultsFormPanel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdults,
  selectChildren,
  selectRooms,
} from '../../store/selectors/topSectionForm.selectors';
import {
  setAdults,
  setChildren,
  setRooms,
} from '../../store/actions/topSectionForm.actions';

export const AdultsFormPanel = memo(({ visible }) => {
  const adultsCount = useSelector(selectAdults);
  const childrenCount = useSelector(selectChildren);
  const roomsCount = useSelector(selectRooms);
  const dispatch = useDispatch();

  const handleChangeAdultsCount = (value) => {
    dispatch(setAdults(value));
  };
  const handleChangeChildrenCount = (value) => {
    dispatch(setChildren(value));
  };
  const handleChangeRoomsCount = (value) => {
    dispatch(setRooms(value));
  };
  return (
    <FormPanel className={styles.adultsForm} visible={visible}>
      <AdultsFormCounter
        name="Adults"
        maxValue={10}
        minValue={1}
        onChange={handleChangeAdultsCount}
        value={adultsCount}
      />
      <AdultsFormCounter
        name="Children"
        maxValue={10}
        minValue={0}
        onChange={handleChangeChildrenCount}
        value={childrenCount}
      />
      <AdultsFormCounter
        name="Rooms"
        maxValue={30}
        minValue={1}
        onChange={handleChangeRoomsCount}
        value={roomsCount}
      />
      <ChildrenAgePanel
        value={childrenCount}
        onChange={handleChangeChildrenCount}
      />
    </FormPanel>
  );
});
