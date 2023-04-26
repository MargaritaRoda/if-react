import { useState } from 'react';
import classNames from 'classnames';

import { Button } from '../Button';
import { AdultsFormPanel } from '../AdultsFormPanel';
import { TopSectionFormInput } from '../TopSectionFormInput';
import { getHotelsData } from '../../services/hotelsData';
import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';
import { useTopSectionFormContext } from '../../contexts/TopSectionForm.context';

import { CalendarInput } from './CalendarInput';
import styles from './TopSectionForm.module.scss';

export const TopSectionForm = () => {
  const { setItems: setAvailableHotels } = useAvailableHotelsContext();
  const { checkInOut } = useTopSectionFormContext();
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { place } = data;
    const placeDestination = place.toLowerCase();

    const checkin = checkInOut?.[0]?.toString();
    const checkOut = checkInOut?.[1]?.toString();

    getHotelsData(placeDestination, checkin, checkOut).then((hotels) => {
      setAvailableHotels(hotels);
    });
  };

  const [visibilityAdultsFormPanel, setVisibilityAdultsFormPanel] =
    useState(false);
  const handleAdultsInputsClick = () => {
    setVisibilityAdultsFormPanel((prevState) => {
      return !prevState;
    });
  };

  return (
    <form onSubmit={handleFormSubmit} action="/" className={styles.Form}>
      <TopSectionFormInput
        className={styles.formRowDest}
        id="place"
        name="place"
        placeholder="New York"
        label="Your destination or hotel name"
        labelClassName={styles.formLabelDest}
        inputClassName={styles.inputPlace}
        inputWrapperClassName={styles.placeInputWrapper}
      />

      <CalendarInput />

      <TopSectionFormInput
        className={classNames(
          styles.formRowBooking,
          styles.formRowBookingAdults,
        )}
        id="adult"
        label="Adults"
        name="adult"
        value="0 Adults"
        inputClassName={styles.inputAdults}
        onClick={handleAdultsInputsClick}
        readOnly
      />
      <TopSectionFormInput
        className={classNames(
          styles.formRowBooking,
          styles.formRowBookingChild,
        )}
        id="child"
        label="Children"
        name="child"
        value="0 Children"
        inputClassName={styles.inputChildren}
        onClick={handleAdultsInputsClick}
        readOnly
      />
      <TopSectionFormInput
        className={classNames(styles.formRowBooking, styles.formRowBookingRoom)}
        id="room"
        label="Rooms"
        name="room"
        value="0 room"
        inputClassName={styles.inputRooms}
        onClick={handleAdultsInputsClick}
        readOnly
      >
        <AdultsFormPanel visible={visibilityAdultsFormPanel} />
      </TopSectionFormInput>

      <div className={classNames(styles.formRows, styles.formRowBtn)}>
        <div className={styles.btnWrapper}>
          <Button type="submit">Search</Button>
        </div>
      </div>
    </form>
  );
};
