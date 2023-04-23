import { useState } from 'react';
import classNames from 'classnames';

import { TopSectionFormInput } from '../TopSectionFormInput';
import { CalendarFormPanel } from '../CalendarFormPanel';

import { useTopSectionFormContext } from '../../contexts/TopSectionForm.context';

import styles from './TopSectionForm.module.scss';

export const CalendarInput = () => {
  const [visibilityFormPanel, setVisibilityFormPanel] = useState(false);
  const { checkInOut } = useTopSectionFormContext();

  const handleInputClick = () => {
    setVisibilityFormPanel((prevState) => {
      return !prevState;
    });
  };

  const [checkIn, checkOut] = checkInOut;

  const checkInText = checkIn
    ? `${checkIn.day} ${checkIn.month.shortName}`
    : 'Check-in';
  const checkOutText = checkOut
    ? `${checkOut.day} ${checkOut.month.shortName}`
    : 'Check-out';

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
