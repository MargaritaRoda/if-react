import { memo, useMemo, useState, useCallback } from 'react';
import classNames from 'classnames';

import { TopSectionFormInput } from '../TopSectionFormInput';
import { CalendarFormPanel } from '../CalendarFormPanel';

import styles from './TopSectionForm.module.scss';
import { useSelector } from 'react-redux';
import { selectCheckInOut } from '../../store/selectors/topSectionForm.selectors';

export const CalendarInput = memo(() => {
  const [visibilityFormPanel, setVisibilityFormPanel] = useState(false);
  const checkInOut = useSelector(selectCheckInOut);

  const handleInputClick = useCallback(() => {
    setVisibilityFormPanel((prevState) => {
      return !prevState;
    });
  }, [setVisibilityFormPanel]);

  const [checkIn, checkOut] = checkInOut;

  const checkInText = useMemo(() => {
    return checkIn ? checkIn : 'Check-in';
  }, [checkIn]);

  const checkOutText = useMemo(() => {
    return checkOut ? checkOut : 'Check-out';
  }, [checkOut]);

  return (
    <>
      <TopSectionFormInput
        className={classNames(styles.formRowCalendar)}
        label="Check-in Check-out"
        name="checkInOut"
        value={`${checkInText} - ${checkOutText}`}
        inputClassName={classNames(styles.inputCalendarInOut)}
        onClick={handleInputClick}
        readOnly
      >
        <CalendarFormPanel visible={visibilityFormPanel} />
      </TopSectionFormInput>
    </>
  );
});
