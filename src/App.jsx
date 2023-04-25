import bestDestIslandPNG from './assets/images/bestDest/island.png';
import bestDestMaldivesPNG from './assets/images/bestDest/maldives.png';
import bestDestSpainPNG from './assets/images/bestDest/spain.png';
import bestDestNorwayPNG from './assets/images/bestDest/norway.png';
import kingKongHostelPNG from './assets/images/reviews/kingKongHostel.png';
import rokokoHotelPNG from './assets/images/reviews/rokokoHotel.png';
import ubudBaliResortPNG from './assets/images/reviews/ubudBaliResort.png';

import { HomesGuests } from './components/sections/HomesGuests';
import { Arrow } from './components/Arrow';
import { AvailableHotels } from './components/sections/AvailableHotels';
import { TopSection } from './components/TopSection';
import { AvailableHotelsContextProvider } from './contexts/AvailableHotels.context';

import './App.scss';

const PUBLIC_PATH = process.env.PUBLIC_URL;

function App() {
  return (
    <>
      <AvailableHotelsContextProvider>
        <TopSection />

        <AvailableHotels />
      </AvailableHotelsContextProvider>

      <section className="container section-benefits">
        <h2 className="section-benefits__title">What do we offer</h2>
        <div className="section-benefits__items">
          <div className="section-benefits__item col-lg-3 col-md-6 col-xs-4">
            <svg className="section-benefits__icon section-benefits__icon--sup">
              <use href={`${PUBLIC_PATH}/images/sprite.svg#support`} />
            </svg>
            <p>Support 24/7</p>
          </div>
          <div className="section-benefits__item col-lg-3 col-md-6 col-xs-4">
            <svg className="section-benefits__icon section-benefits__icon--message">
              <use href={`${PUBLIC_PATH}/images/sprite.svg#message`} />
            </svg>
            <p>Communicate directly</p>
          </div>
          <div className="section-benefits__item col-lg-3 col-md-6 col-xs-4">
            <svg className="section-benefits__icon section-benefits__icon--book">
              <use href={`${PUBLIC_PATH}/images/sprite.svg#book`} />
            </svg>

            <p>Book online</p>
          </div>
          <div className="section-benefits__item col-lg-3 col-md-6 col-xs-4">
            <svg className="section-benefits__icon section-benefits__icon--like">
              <use href={`${PUBLIC_PATH}/images/sprite.svg#like`} />
            </svg>
            <p>Real guest review</p>
          </div>
        </div>
      </section>
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
        <section className="container registration__container">
          <div className="registration__wrapper-desktop">
            <h3 className="registration_title">
              Sign up and get 20% off your first booking
            </h3>
            <button className="registration__button">Sign up</button>
          </div>

          <div className="registration__icon">
            <svg className="registration__icon-img">
              <use
                href={`${PUBLIC_PATH}/images/sprite.svg#registration_logo`}
              />
            </svg>
          </div>

          <svg className="registration__close-wnd">
            <use href={`${PUBLIC_PATH}/images/sprite.svg#close-wnd`} />
          </svg>
          <div className="registration__logo registration__logo--mobile">
            <svg className="registration__logo-icon">
              <use href={`${PUBLIC_PATH}/images/sprite.svg#logo`} />
            </svg>
          </div>
          <h5 className="registration__title-mobile">
            Sign up in the app and get 20% off your first booking
          </h5>
          <h5 className="registration__install">Install</h5>
        </section>
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
      <footer className="footer">
        <div className="container footer__container">
          {/*<div className="footer__logo footer__logo--mobile col-xs-2">*/}
          {/*  <svg className="footer__logo-icon">*/}
          {/*    <use href={`${PUBLIC_PATH}/images/sprite.svg#logo`} />*/}
          {/*  </svg>*/}
          {/*</div>*/}
          <nav className="footer__items col-xs-5">
            <div className="footer__item">
              <ul className="footer__links">
                <li className="footer__links-item">
                  <h3 className="footer__links-header">About</h3>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">How to Triphouse works</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Careers</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Privacy</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__links">
                <li className="footer__links-item">
                  <h3 className="footer__links-header">Property types</h3>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Guest houses</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Hotels</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Apartments</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Villas</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Holiday homes</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Hostels</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__links">
                <li className="footer__links-item">
                  <h3 className="footer__links-header">Support</h3>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">Contact customer service</a>
                </li>
                <li className="footer__links-item footer__links-item--desktop">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="footer__copyright col-lg-3 col-xs-5">
            © 2022 Triphouse, Inc. All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
