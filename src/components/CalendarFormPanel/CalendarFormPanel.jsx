import React from 'react';
import { Calendar } from 'react-multi-date-picker';
import { FormPanel } from '../FormPanel';

import styles from './CalendarFormPanel.module.scss';
import './Calendar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckInOut } from '../../store/selectors/topSectionForm.selectors';
import { setCheckInOut } from '../../store/actions/topSectionForm.actions';

export const CalendarFormPanel = ({ visible }) => {
  const checkInOut = useSelector(selectCheckInOut);
  const dispatch = useDispatch();

  const setValues = (valueCalendar) => {
    const newValueCalendar = valueCalendar.map((item) => item.toString());

    dispatch(setCheckInOut(newValueCalendar));
  };
  const day = new Date();
  return (
    <FormPanel visible={visible} className={styles.root} align="left">
      <Calendar
        className="calendar-form-panel"
        value={checkInOut}
        onChange={setValues}
        range
        numberOfMonths={2}
        showOtherDays
        minDate={day}
      />
    </FormPanel>
  );
};
