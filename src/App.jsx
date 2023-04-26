import { useState } from 'react';
import bestDestIslandPNG from './assets/images/bestDest/island.png';
import bestDestMaldivesPNG from './assets/images/bestDest/maldives.png';
import bestDestSpainPNG from './assets/images/bestDest/spain.png';
import bestDestNorwayPNG from './assets/images/bestDest/norway.png';
import kingKongHostelPNG from './assets/images/reviews/kingKongHostel.png';
import rokokoHotelPNG from './assets/images/reviews/rokokoHotel.png';
import ubudBaliResortPNG from './assets/images/reviews/ubudBaliResort.png';

import { HomesGuests } from './components/sections/HomesGuests';

import './App.scss';
import { Arrow } from './components/Arrow';
import { Container } from './components/Container';
import { TopSectionForm } from './components/TopSectionForm';
import { AvailableHotels } from './components/sections/AvailableHotels';
import { Header } from './components/Header';

const PUBLIC_PATH = process.env.PUBLIC_URL;

function App() {
  const [availableHotels, setAvailableHotels] = useState([]);

  return (
    <>
      <svg className="google-sprite" xmlns="http://www.w3.org/2000/svg">
        <symbol id="google" viewBox="0 0 135 40">
          <path
            d="M130 39.9999H5C2.25 39.9999 0 37.75 0 35V4.99999C0 2.25 2.25 0 5 0H130C132.75 0 135 2.25 135 4.99999V35C135 37.75 132.75 39.9999 130 39.9999Z"
            fill="black"
          />
          <path
            d="M130 0.799999C132.32 0.799999 134.2 2.68 134.2 4.99999V35C134.2 37.32 132.32 39.2 130 39.2H5C2.68 39.2 0.8 37.32 0.8 35V4.99999C0.8 2.68 2.68 0.799999 5 0.799999H130ZM130 0H5C2.25 0 0 2.25 0 4.99999V35C0 37.75 2.25 39.9999 5 39.9999H130C132.75 39.9999 135 37.75 135 35V4.99999C135 2.25 132.75 0 130 0Z"
            fill="#A6A6A6"
          />
          <path
            d="M47.42 10.2399C47.42 11.0799 47.17 11.7499 46.67 12.2399C46.11 12.8299 45.37 13.1299 44.47 13.1299C43.6 13.1299 42.87 12.8299 42.26 12.2299C41.65 11.6299 41.35 10.8799 41.35 9.99991C41.35 9.1099 41.65 8.36989 42.26 7.76988C42.87 7.16988 43.6 6.86987 44.47 6.86987C44.9 6.86987 45.31 6.94987 45.7 7.11988C46.09 7.28988 46.4 7.50988 46.64 7.78988L46.11 8.31989C45.71 7.84988 45.17 7.60988 44.47 7.60988C43.84 7.60988 43.29 7.82988 42.83 8.27989C42.37 8.7199 42.14 9.2999 42.14 10.0099C42.14 10.7199 42.37 11.2999 42.83 11.7399C43.29 12.1799 43.84 12.4099 44.47 12.4099C45.14 12.4099 45.7 12.1899 46.15 11.7399C46.44 11.4499 46.61 11.0399 46.65 10.5199H44.47V9.79991H47.38C47.4 9.94991 47.42 10.0999 47.42 10.2399Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M52.03 7.73988H49.3V9.63988H51.76V10.3599H49.3V12.2599H52.03V12.9999H48.53V6.99988H52.03V7.73988Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M55.28 12.9999H54.51V7.73988H52.83V6.99988H56.95V7.73988H55.27V12.9999H55.28Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M59.94 12.9999V6.99988H60.71V12.9999H59.94Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M64.13 12.9999H63.36V7.73988H61.68V6.99988H65.8V7.73988H64.12V12.9999H64.13Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M73.61 12.2199C73.02 12.8299 72.29 13.1299 71.41 13.1299C70.53 13.1299 69.8 12.8299 69.21 12.2199C68.62 11.6099 68.33 10.8699 68.33 9.99991C68.33 9.1299 68.62 8.37989 69.21 7.77988C69.8 7.16988 70.53 6.86987 71.41 6.86987C72.28 6.86987 73.01 7.16988 73.61 7.77988C74.2 8.38989 74.5 9.1299 74.5 9.99991C74.49 10.8799 74.2 11.6199 73.61 12.2199ZM69.78 11.7199C70.22 12.1699 70.77 12.3899 71.41 12.3899C72.05 12.3899 72.6 12.1699 73.04 11.7199C73.48 11.2699 73.71 10.6999 73.71 9.99991C73.71 9.2999 73.49 8.7299 73.04 8.27989C72.6 7.82988 72.05 7.60988 71.41 7.60988C70.77 7.60988 70.22 7.82988 69.78 8.27989C69.34 8.7299 69.11 9.2999 69.11 9.99991C69.11 10.6999 69.34 11.2699 69.78 11.7199Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.58 12.9999V6.99988H76.52L79.44 11.6699H79.47L79.44 10.5099V6.99988H80.21V12.9999H79.41L76.36 8.10988H76.33L76.36 9.26988V12.9999H75.58Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
            strokeMiterlimit="10"
          />
          <path
            d="M68.14 21.75C65.79 21.75 63.87 23.54 63.87 26C63.87 28.45 65.79 30.25 68.14 30.25C70.49 30.25 72.41 28.45 72.41 26C72.41 23.54 70.49 21.75 68.14 21.75ZM68.14 28.58C66.85 28.58 65.74 27.52 65.74 26C65.74 24.47 66.85 23.42 68.14 23.42C69.43 23.42 70.54 24.47 70.54 26C70.54 27.52 69.42 28.58 68.14 28.58ZM58.82 21.75C56.47 21.75 54.55 23.54 54.55 26C54.55 28.45 56.47 30.25 58.82 30.25C61.17 30.25 63.09 28.45 63.09 26C63.09 23.54 61.17 21.75 58.82 21.75ZM58.82 28.58C57.53 28.58 56.42 27.52 56.42 26C56.42 24.47 57.53 23.42 58.82 23.42C60.11 23.42 61.22 24.47 61.22 26C61.22 27.52 60.11 28.58 58.82 28.58ZM47.74 23.06V24.86H52.06C51.93 25.87 51.59 26.62 51.08 27.13C50.45 27.76 49.47 28.45 47.75 28.45C45.09 28.45 43.01 26.31 43.01 23.65C43.01 20.99 45.09 18.8499 47.75 18.8499C49.18 18.8499 50.23 19.4099 51 20.1399L52.27 18.8699C51.19 17.8399 49.76 17.0499 47.74 17.0499C44.1 17.0499 41.04 20.0099 41.04 23.66C41.04 27.3 44.1 30.27 47.74 30.27C49.71 30.27 51.19 29.63 52.35 28.42C53.54 27.23 53.91 25.55 53.91 24.2C53.91 23.78 53.88 23.39 53.81 23.07H47.74V23.06ZM93.05 24.46C92.7 23.51 91.62 21.75 89.41 21.75C87.22 21.75 85.4 23.47 85.4 26C85.4 28.38 87.2 30.25 89.62 30.25C91.57 30.25 92.7 29.06 93.16 28.37L91.71 27.4C91.23 28.11 90.57 28.58 89.62 28.58C88.67 28.58 87.99 28.14 87.56 27.29L93.25 24.94L93.05 24.46ZM87.25 25.88C87.2 24.24 88.52 23.4 89.47 23.4C90.21 23.4 90.84 23.77 91.05 24.3L87.25 25.88ZM82.63 30H84.5V17.4999H82.63V30ZM79.57 22.7H79.5C79.08 22.2 78.28 21.75 77.26 21.75C75.13 21.75 73.18 23.62 73.18 26.02C73.18 28.4 75.13 30.26 77.26 30.26C78.27 30.26 79.08 29.81 79.5 29.29H79.56V29.9C79.56 31.53 78.69 32.4 77.29 32.4C76.15 32.4 75.44 31.58 75.15 30.89L73.52 31.57C73.99 32.7 75.23 34.08 77.29 34.08C79.48 34.08 81.33 32.79 81.33 29.65V22.01H79.56V22.7H79.57ZM77.42 28.58C76.13 28.58 75.05 27.5 75.05 26.02C75.05 24.52 76.13 23.43 77.42 23.43C78.69 23.43 79.69 24.53 79.69 26.02C79.7 27.5 78.7 28.58 77.42 28.58ZM101.81 17.4999H97.34V30H99.21V25.26H101.82C103.89 25.26 105.92 23.76 105.92 21.38C105.92 18.9999 103.87 17.4999 101.81 17.4999ZM101.85 23.52H99.2V19.2299H101.85C103.25 19.2299 104.04 20.3899 104.04 21.37C104.04 22.35 103.25 23.52 101.85 23.52ZM113.39 21.73C112.04 21.73 110.64 22.33 110.06 23.64L111.72 24.33C112.07 23.64 112.73 23.41 113.42 23.41C114.38 23.41 115.37 23.99 115.38 25.02V25.15C115.04 24.96 114.32 24.67 113.43 24.67C111.64 24.67 109.83 25.65 109.83 27.48C109.83 29.15 111.29 30.23 112.93 30.23C114.18 30.23 114.88 29.67 115.31 29.01H115.37V29.98H117.17V25.19C117.18 22.97 115.52 21.73 113.39 21.73ZM113.16 28.58C112.55 28.58 111.7 28.27 111.7 27.52C111.7 26.56 112.76 26.19 113.68 26.19C114.5 26.19 114.89 26.37 115.38 26.61C115.24 27.76 114.24 28.58 113.16 28.58ZM123.74 22L121.6 27.42H121.54L119.32 22H117.31L120.64 29.58L118.74 33.79H120.69L125.82 22H123.74ZM106.94 30H108.81V17.4999H106.94V30Z"
            fill="white"
          />
          <path
            d="M10.44 7.53997C10.15 7.84997 9.97998 8.32997 9.97998 8.93997V31.0599C9.97998 31.6799 10.15 32.1599 10.44 32.4599L10.51 32.5299L22.9 20.1499V19.9999V19.8499L10.51 7.46997L10.44 7.53997Z"
            fill="url(#paint0_linear_0_1)"
          />
          <path
            d="M27.03 24.2799L22.9 20.1499V19.9999V19.8499L27.03 15.72L27.12 15.77L32.01 18.55C33.41 19.3399 33.41 20.6399 32.01 21.4399L27.12 24.2199L27.03 24.2799Z"
            fill="url(#paint1_linear_0_1)"
          />
          <path
            d="M27.12 24.22L22.9 20L10.44 32.46C10.9 32.95 11.66 33.01 12.52 32.52L27.12 24.22Z"
            fill="url(#paint2_linear_0_1)"
          />
          <path
            d="M27.12 15.78L12.51 7.47999C11.65 6.98999 10.89 7.04999 10.43 7.53999L22.9 20L27.12 15.78Z"
            fill="url(#paint3_linear_0_1)"
          />
          <path
            opacity="0.2"
            d="M27.03 24.13L12.51 32.38C11.7 32.84 10.97 32.81 10.51 32.39L10.44 32.46L10.51 32.53C10.98 32.95 11.7 32.98 12.51 32.52L27.12 24.22L27.03 24.13Z"
            fill="black"
          />
          <path
            opacity="0.12"
            d="M10.44 32.3201C10.15 32.0101 9.97998 31.5302 9.97998 30.9202V31.0702C9.97998 31.6901 10.15 32.1701 10.44 32.4701L10.51 32.4001L10.44 32.3201Z"
            fill="black"
          />
          <path
            opacity="0.12"
            d="M32.01 21.3L27.02 24.1301L27.11 24.2201L32 21.44C32.7 21.04 33.05 20.52 33.05 20C33 20.47 32.65 20.94 32.01 21.3Z"
            fill="black"
          />
          <path
            opacity="0.25"
            d="M12.51 7.61994L32.01 18.7C32.64 19.06 33 19.52 33.06 20C33.06 19.48 32.71 18.95 32.01 18.56L12.51 7.47994C11.11 6.68994 9.96997 7.34994 9.96997 8.94994V9.09994C9.96997 7.48994 11.12 6.82994 12.51 7.61994Z"
            fill="white"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use transform="scale(0.000454545 0.000831255)" />
            </pattern>
            <linearGradient
              id="paint0_linear_0_1"
              x1="21.7997"
              y1="8.70967"
              x2="5.01737"
              y2="25.4921"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A0FF" />
              <stop offset="0.00657445" stopColor="#00A1FF" />
              <stop offset="0.2601" stopColor="#00BEFF" />
              <stop offset="0.5122" stopColor="#00D2FF" />
              <stop offset="0.7604" stopColor="#00DFFF" />
              <stop offset="1" stopColor="#00E3FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="33.8344"
              y1="20.0013"
              x2="9.63756"
              y2="20.0013"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE000" />
              <stop offset="0.4087" stopColor="#FFBD00" />
              <stop offset="0.7754" stopColor="#FFA500" />
              <stop offset="1" stopColor="#FF9C00" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="24.827"
              y1="22.2961"
              x2="2.06875"
              y2="45.0544"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_1"
              x1="7.29727"
              y1="0.176203"
              x2="17.4598"
              y2="10.3387"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32A071" />
              <stop offset="0.0685" stopColor="#2DA771" />
              <stop offset="0.4762" stopColor="#15CF74" />
              <stop offset="0.8009" stopColor="#06E775" />
              <stop offset="1" stopColor="#00F076" />
            </linearGradient>
            <clipPath id="clip0_0_1">
              <rect
                width="1440"
                height="5241"
                fill="white"
                transform="translate(-585 -740)"
              />
            </clipPath>
          </defs>
        </symbol>
      </svg>
      <main className="top-section">
        <Container>
          <Header />
          <div className="top-section__body">
            <h1 className="top-section__title">
              Discover stays
              <br />
              to live, work or just relax
            </h1>

            <TopSectionForm setAvailableHotels={setAvailableHotels} />
          </div>
          <div className="top-section__icons">
            <div className="top-section__google">
              <svg className="top-section__google">
                <use href="#google" />
              </svg>
            </div>
            <div>
              <svg className="top-section__apple">
                <use href={`${PUBLIC_PATH}/images/sprite.svg#apple`} />
              </svg>
            </div>
          </div>
        </Container>
      </main>

      <AvailableHotels items={availableHotels} />

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
