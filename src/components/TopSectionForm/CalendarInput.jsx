import { useMemo, useState, useCallback } from 'react';
import classNames from 'classnames';

import { TopSectionFormInput } from '../TopSectionFormInput';
import { CalendarFormPanel } from '../CalendarFormPanel';

import { useTopSectionFormContext } from '../../contexts/TopSectionForm.context';

import styles from './TopSectionForm.module.scss';

export const CalendarInput = () => {
  const [visibilityFormPanel, setVisibilityFormPanel] = useState(false);
  const { checkInOut } = useTopSectionFormContext();

  const handleInputClick = useCallback(() => {
    setVisibilityFormPanel((prevState) => {
      return !prevState;
    });
  }, [setVisibilityFormPanel]);

  const [checkIn, checkOut] = checkInOut;

  const checkInText = useMemo(() => {
    return checkIn ? `${checkIn.day} ${checkIn.month.shortName}` : 'Check-in';
  }, [checkIn]);

  const checkOutText = useMemo(() => {
    return checkOut
      ? `${checkOut.day} ${checkOut.month.shortName}`
      : 'Check-out';
  }, [checkOut]);

  return (
    <>
      <TopSectionFormInput
        className={classNames(
          styles.formRowCalendar,
          styles.formRowCalendarInOut,
        )}
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
};
