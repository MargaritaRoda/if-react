import classNames from 'classnames';

import { HOTELS_DATA } from '../../data';
import { Button } from '../Button';
import { AdultsFormPanel } from '../AdultsFormPanel';
import { TopSectionFormInput } from '../TopSectionFormInput';

import styles from './TopSectionForm.module.scss';

export const TopSectionForm = ({ setAvailableHotels }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { place } = data;
    const placeDestination = place.toLowerCase();
    setAvailableHotels(
      HOTELS_DATA.filter(({ name, city, country }) => {
        return (
          name.toLowerCase().includes(placeDestination) ||
          city.toLowerCase().includes(placeDestination) ||
          country.toLowerCase().includes(placeDestination)
        );
      }),
    );
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

      <TopSectionFormInput
        className={classNames(styles.formRowCalendar, styles.formRowCalendarIn)}
        id="calendar-in"
        label="Check-in"
        name="calendar-in"
        value="Tue 15 Sept"
        inputClassName={styles.inputCalendarIn}
        readOnly
      />
      <TopSectionFormInput
        className={classNames(
          styles.formRowCalendar,
          styles.formRowCalendarOut,
        )}
        id="calendar-out"
        label="Check-out"
        name="calendar-out"
        value="Sat 19 Sept"
        inputClassName={styles.inputCalendarOut}
        readOnly
      />

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
        readOnly
      />
      <TopSectionFormInput
        className={classNames(styles.formRowBooking, styles.formRowBookingRoom)}
        id="room"
        label="Rooms"
        name="room"
        value="0 room"
        inputClassName={styles.inputRooms}
        readOnly
      >
        <AdultsFormPanel />
      </TopSectionFormInput>

      <div className={classNames(styles.formRows, styles.formRowBtn)}>
        <div className={styles.btnWrapper}>
          <Button type="submit">Search</Button>
        </div>
      </div>
    </form>
  );
};
