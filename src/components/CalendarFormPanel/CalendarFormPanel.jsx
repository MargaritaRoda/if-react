import React from 'react';
import { Calendar } from 'react-multi-date-picker';
import { FormPanel } from '../FormPanel';
import { useTopSectionFormContext } from '../../contexts/TopSectionForm.context';

import styles from './CalendarFormPanel.module.scss';
import './Calendar.scss';

export const CalendarFormPanel = ({ visible }) => {
  const { checkInOut, setCheckInOut } = useTopSectionFormContext();

  const setValues = (valueCalendar) => {
    setCheckInOut(valueCalendar);
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
