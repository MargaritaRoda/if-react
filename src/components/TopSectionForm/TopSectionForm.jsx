import React, { useState } from 'react';

import { HOTELS_DATA } from '../../data';

export const TopSectionForm = ({ setAvailableHotels }) => {
  const [placeText, setPlaceText] = useState('');
  const handleInputPlaceTextChange = (event) => {
    setPlaceText(event.target.value.toLowerCase().trim());
  };

  const handleSubmitClick = () => {
    setAvailableHotels(
      HOTELS_DATA.filter(({ name, city, country }) => {
        return (
          name.toLowerCase().includes(placeText) ||
          city.toLowerCase().includes(placeText) ||
          country.toLowerCase().includes(placeText)
        );
      }),
    );
  };

  return (
    <form action="/" className="top-section__form">
      <div className="top-section__form-row top-section__form-row--dest">
        <label
          htmlFor="place"
          className="top-section__form-label top-section__form-label--dest"
        >
          Your destination or hotel name:
        </label>
        <input
          type="text"
          id="place"
          name="place"
          placeholder="New York"
          required
          onChange={handleInputPlaceTextChange}
          className="top-section__input top-section__input--place"
        />
      </div>
      <div className="top-section__form-row top-section__form-row--calendar top-section__form-row--calendar--in">
        <label htmlFor="calendar-in" className="top-section__form-label">
          Check-in
        </label>
        <div className="top-section__input-wrapper">
          <input
            readOnly
            type="text"
            id="calendar-in"
            name="calendar-in"
            value="Tue 15 Sept"
            className="top-section__input top-section__input--labeled top-section__input--calendar-in"
          />
        </div>
      </div>
      <div className="top-section__form-row top-section__form-row--calendar top-section__form-row--calendar--out">
        <label htmlFor="calendar-out" className="top-section__form-label">
          Check-out
        </label>
        <div className="top-section__input-wrapper">
          <input
            readOnly
            type="text"
            id="calendar-out"
            name="calendar-out"
            value="Sat 19 Sept"
            className="top-section__input top-section__input--labeled top-section__input--calendar-out"
          />
        </div>
        <div className="form-panel calendar-panel form-panel--hidden"></div>
      </div>

      <div className="top-section__form-row top-section__form-row--booking top-section__form-row--adult">
        <label htmlFor="adult" className="top-section__form-label">
          Adults
        </label>
        <input
          readOnly
          type="text"
          id="adult"
          name="adult"
          value="0 Adults"
          required
          className="top-section__input top-section__input--labeled top-section__input--adults js-top-section-counter"
          data-prefix="Adults"
          data-field="adults"
          data-min="0"
          data-max="30"
        />
      </div>
      <div className="top-section__form-row top-section__form-row--booking top-section__form-row--child">
        <div className="top-section__child-lines">
          <label htmlFor="child" className="top-section__form-label">
            Children
          </label>
          <input
            readOnly
            type="text"
            id="child"
            name="child"
            value="0 Children"
            required
            className="top-section__input top-section__input--labeled top-section__input--children js-top-section-counter"
            data-prefix="Children"
            data-field="children"
            data-min="0"
            data-max="10"
          />
        </div>
      </div>
      <div className="top-section__form-row top-section__form-row--booking top-section__form-row--room">
        <label htmlFor="room" className="top-section__form-label">
          {' '}
          Rooms{' '}
        </label>
        <input
          readOnly
          type="text"
          id="room"
          name="room"
          value="0 room"
          required
          className="top-section__input top-section__input--labeled top-section__input--rooms js-top-section-counter"
          data-prefix="rooms"
          data-field="rooms"
          data-min="0"
          data-max="30"
        />
        <div className="form-panel form-panel--hidden adults-form">
          <div className="adults-form__row">
            <div className="adults-form__row-left">Adults</div>
            <div className="adults-form__row-right">
              <button disabled className="adults-form__btn adults-btn--minus">
                -
              </button>
              <div className="adults-form__number-adults">0</div>
              <button className="adults-form__btn adults-btn--plus">+</button>
            </div>
          </div>
          <div className="adults-form__row">
            <div className="adults-form__row-left">Children</div>
            <div className="adults-form__row-right">
              <button disabled className="adults-form__btn children-btn--minus">
                -
              </button>
              <div className="adults-form__number-children">0</div>
              <button className="adults-form__btn children-btn--plus">+</button>
            </div>
          </div>
          <div className="adults-form__row">
            <div className="adults-form__row-left">Rooms</div>
            <div className="adults-form__row-right">
              <button disabled className="adults-form__btn rooms-btn--minus">
                -
              </button>
              <div className="adults-form__number-rooms">0</div>
              <button className="adults-form__btn rooms-btn--plus">+</button>
            </div>
          </div>
          <div className="adults-form__children adults-form__children--hidden">
            <p className="adults-form__info">
              What is the age of the child you’re travelling with?
            </p>
            <div className="adults-form__children-container"></div>
          </div>
        </div>
      </div>
      <div className="top-section__form-row top-section__form-row--btn">
        <div className="top-section__btn-wrapper">
          <button
            className="top-section__submit-btn"
            type="button"
            onClick={handleSubmitClick}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
