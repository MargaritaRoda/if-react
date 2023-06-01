import bestDestIslandPNG from './assets/images/bestDest/island.png';
import bestDestMaldivesPNG from './assets/images/bestDest/maldives.png';
import bestDestSpainPNG from './assets/images/bestDest/spain.png';
import bestDestNorwayPNG from './assets/images/bestDest/norway.png';
import kingKongHostelPNG from './assets/images/reviews/kingKongHostel.png';
import rokokoHotelPNG from './assets/images/reviews/rokokoHotel.png';
import ubudBaliResortPNG from './assets/images/reviews/ubudBaliResort.png';

import { Outlet } from 'react-router-dom';

import { HomesGuests } from './components/sections/HomesGuests';
import { Arrow } from './components/Arrow';
import { AvailableHotels } from './components/sections/AvailableHotels';
import { TopSection } from './components/TopSection';
import { Footer } from './components/Footer';

import { AvailableHotelsScrollContextProvider } from './contexts/AvailableHotelsScroll.context';
import { useRedirectUnauthorized } from './hooks/useRedirectUnauthorized';

import './App.scss';
import { Benefits } from './components/Benefits';
import { RegistrationSection } from './RegistrationSection';

const PUBLIC_PATH = process.env.PUBLIC_URL;

function App() {
  useRedirectUnauthorized();
  return (
    <>
      <AvailableHotelsScrollContextProvider>
        <TopSection />

        <AvailableHotels />
      </AvailableHotelsScrollContextProvider>

      <Outlet />

      <Benefits />

      <HomesGuests />

      <section className="best-dest">
        <div className="container best-dest__container">
          <h2 className="best-dest__title">The best destinations</h2>
          <form className="best-dest__row-btn">
            <input
              className="best-dest__input"
              type="radio"
              id="regions"
              name="btn"
            />
            <label htmlFor="regions" className="label-input">
              Regions
            </label>

            <input
              className="best-dest__input"
              type="radio"
              id="cities"
              name="btn"
              readOnly
              checked
            />
            <label htmlFor="cities" className="label-input">
              Cities
            </label>

            <input
              className="best-dest__input"
              type="radio"
              id="places"
              name="btn"
            />
            <label htmlFor="places" className="label-input">
              Places
              <span className="label-input-mobile">&nbsp;of interest</span>
            </label>
          </form>
          <div className="best-dest__slider">
            <div className="best-dest__items">
              <article className="best-dest__item">
                <div className="best-dest__img">
                  <img
                    className="best-dest__item-img"
                    src={bestDestMaldivesPNG}
                    alt="maldives"
                  />
                  <button className="best-dest__btn">Book now</button>
                </div>
                <div className="best-dest__item-title">Maldives</div>
              </article>
              <article className="best-dest__item">
                <div className="best-dest__img">
                  <img
                    className="best-dest__item-img"
                    src={bestDestSpainPNG}
                    alt="spain"
                  />
                  <button className="best-dest__btn">Book now</button>
                </div>
                <div className="best-dest__item-title">Spain</div>
              </article>
              <article className="best-dest__item">
                <div className="best-dest__img">
                  <img
                    className="best-dest__item-img"
                    src={bestDestNorwayPNG}
                    alt="norway"
                  />
                  <button className="best-dest__btn">Book now</button>
                </div>
                <div className="best-dest__item-title">Norway</div>
              </article>
              <article className="best-dest__item">
                <div className="best-dest__img">
                  <img
                    className="best-dest__item-img"
                    src={bestDestIslandPNG}
                    alt="island"
                  />
                  <button className="best-dest__btn">Book now</button>
                </div>
                <div className="best-dest__item-title">Island</div>
              </article>
            </div>
            <div className="best-dest__slider-down">
              <div className="best-dest__arrow-down"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="section__wrapper-items">
        <RegistrationSection />

        <section className="reviews">
          <div className="container reviews__container">
            <h2 className="reviews__title">Reviews</h2>

            <div className="reviews__slider">
              <div className="reviews__items">
                <article className="reviews__item">
                  <div className="reviews__img">
                    <img
                      className="reviews__item-img"
                      src={ubudBaliResortPNG}
                      alt="ubud_bali_resort"
                    />
                    <div className="reviews__price">
                      <p className="reviews__price-title">From 250 USD</p>
                    </div>
                  </div>
                  <div className="reviews__wrapper">
                    <div className="reviews__wrapper-address">
                      <h5>Ubud Bali Resort&SPA</h5>
                      <p>Bali, Indonesia</p>
                    </div>
                    <div className="reviews__wrapper-rating">
                      <div className="reviews__rating">9,4</div>
                      <p>1324 reviews</p>
                    </div>
                  </div>
                  <div className="reviews__person">
                    <svg className="reviews__logo-icon">
                      <use
                        href={`${PUBLIC_PATH}/images/sprite.svg#reviews-logo`}
                      />
                    </svg>
                    <p className="reviews__person-name">Hanna Ivanova</p>
                    <div className="reviews__person-address">
                      <svg className="reviews__person-icon">
                        <use
                          href={`${PUBLIC_PATH}/images/sprite.svg#ukraine`}
                        />
                      </svg>
                      <p>Ukraine</p>
                    </div>
                  </div>

                  <div className="reviews__person-review">
                    <p>
                      Great location, really pleasant and clean rooms, but the
                      thing that makes this such a good place to stay are the
                      staff. All of the people are incredibly helpful and
                      generous with their time and advice.
                    </p>
                  </div>
                  <div className="reviews__nav">
                    <div className="reviews__nav-circle reviews__nav-circle--color"></div>
                    <div className="reviews__nav-circle"></div>
                    <div className="reviews__nav-circle"></div>
                    <div className="reviews__nav-circle"></div>
                  </div>
                </article>
                <article className="reviews__item">
                  <div className="reviews__img">
                    <img
                      className="reviews__item-img"
                      src={kingKongHostelPNG}
                      alt="king_kong_hostel"
                    />
                    <div className="reviews__price">
                      <p className="reviews__price-title">From 40 USD</p>
                    </div>
                  </div>
                  <div className="reviews__wrapper">
                    <div className="reviews__wrapper-address">
                      <h5>King Kong Hostel</h5>
                      <p>Rotterdam, Netherlands</p>
                    </div>
                    <div className="reviews__wrapper-rating">
                      <div className="reviews__rating">8,9</div>
                      <p>2016 reviews</p>
                    </div>
                  </div>
                  <div className="reviews__person">
                    <svg className="reviews__logo-icon">
                      <use
                        href={`${PUBLIC_PATH}/images/sprite.svg#reviews-logo`}
                      />
                    </svg>
                    <p className="reviews__person-name">Adam Smith</p>
                    <div className="reviews__person-address">
                      <svg className="reviews__person-icon">
                        <use href={`${PUBLIC_PATH}/images/sprite.svg#usa`} />
                      </svg>
                      <p>USA</p>
                    </div>
                  </div>

                  <div className="reviews__person-review">
                    <p>
                      I've been in this hostel for a month and here is the best
                      hostel of all Excellent management of excellent and
                      ethical staff and bedrooms Bathrooms are always clean and
                      excellent Most importantly, those who work here are kind
                      and good-natured.
                    </p>
                  </div>
                </article>
                <article className="reviews__item">
                  <div className="reviews__img">
                    <img
                      className="reviews__item-img"
                      src={rokokoHotelPNG}
                      alt="rokoko_hotel"
                    />
                    <div className="reviews__price">
                      <p className="reviews__price-title">From 100 USD</p>
                    </div>
                  </div>
                  <div className="reviews__wrapper">
                    <div className="reviews__wrapper-address">
                      <h5>Rokoko Hotel;</h5>
                      <p>Ourika, Marocco</p>
                    </div>
                    <div className="reviews__wrapper-rating">
                      <div className="reviews__rating">9,1</div>
                      <p>815 reviews</p>
                    </div>
                  </div>
                  <div className="reviews__person">
                    <svg className="reviews__logo-icon">
                      <use
                        href={`${PUBLIC_PATH}/images/sprite.svg#reviews-logo`}
                      />
                    </svg>
                    <p className="reviews__person-name">Anika Messer</p>
                    <div className="reviews__person-address">
                      <svg className="reviews__person-icon">
                        <use href={`${PUBLIC_PATH}/images/sprite.svg#de`} />
                      </svg>
                      <p>Germany</p>
                    </div>
                  </div>

                  <div className="reviews__person-review">
                    <p>
                      Efficient, friendly, professional, and appropriately
                      attentive. Great hotel in a great location. Easy access to
                      all the surrounding historical sites. Staff is fantastic.
                      Will definitely stay at this location during my next stay
                      in Marocco.
                    </p>
                  </div>
                </article>
              </div>
              <Arrow />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
