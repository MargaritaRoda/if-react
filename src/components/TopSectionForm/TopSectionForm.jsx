import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Button } from '../Button';
import { AdultsFormPanel } from '../AdultsFormPanel';
import { TopSectionFormInput } from '../TopSectionFormInput';
import { useAvailableHotelsScrollContext } from '../../contexts/AvailableHotelsScroll.context';

import { CalendarInput } from './CalendarInput';
import styles from './TopSectionForm.module.scss';
import { setFilter } from '../../store/slicers/availableHotelsFilter.slicer';
import { selectTopSectionForm } from '../../store/selectors/topSectionForm.selectors';

const scrollToAvailableHotels = (node) => {
  node?.scrollIntoView({ behavior: 'smooth' });
};

export const TopSectionForm = () => {
  const scrollRef = useAvailableHotelsScrollContext();

  const {
    adults: adultsCount,
    children: childrenCount,
    rooms: roomsCount,
    checkInOut,
    childrenAges,
  } = useSelector(selectTopSectionForm);

  const [visibilityAdultsFormPanel, setVisibilityAdultsFormPanel] =
    useState(false);

  const dispatch = useDispatch();

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      const { place } = data;
      const placeDestination = place.toLowerCase();

      const checkIn = checkInOut?.[0]?.toString();
      const checkOut = checkInOut?.[1]?.toString();

      dispatch(
        setFilter({
          search: placeDestination,
          checkIn,
          checkOut,
          adults: adultsCount,
          children: childrenCount,
          childrenAges,
          rooms: roomsCount,
        }),
      );

      setTimeout(() => {
        scrollToAvailableHotels(scrollRef.current);
      }, 100);
    },
    [
      checkInOut,
      dispatch,
      adultsCount,
      childrenCount,
      roomsCount,
      childrenAges,
      scrollRef,
    ],
  );

  const handleAdultsInputsClick = useCallback(() => {
    setVisibilityAdultsFormPanel((prevState) => {
      return !prevState;
    });
  }, [setVisibilityAdultsFormPanel]);

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
        value={`${adultsCount} Adults`}
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
        value={`${childrenCount} Children`}
        inputClassName={styles.inputChildren}
        onClick={handleAdultsInputsClick}
        readOnly
      />
      <TopSectionFormInput
        className={classNames(styles.formRowBooking, styles.formRowBookingRoom)}
        id="room"
        label="Rooms"
        name="room"
        value={`${roomsCount} Rooms`}
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
