import axios from 'axios';
import { API_HOTELS_POPULAR_URL, API_HOTELS_URL } from '../config';
import { HOTELS_DATA } from '../../data';

const cache = new Map();

export const getRequest = (url) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      axios.get(url).then((r) => r.data),
    );
  }
  return cache.get(url);
};

export const getPopularHotelsData = async () => {
  return HOTELS_DATA;
  return getRequest(API_HOTELS_POPULAR_URL);
};

export const getHotelsData = async ({
  search,
  checkIn,
  checkOut,
  adults,
  children,
  childrenAges,
  rooms,
}) => {
  const searchPrams = new URLSearchParams({
    checkIn,
    search,
    checkOut,
    adults,
    children,
    childrenAges,
    rooms,
  });
  return getRequest(`${API_HOTELS_URL}?${searchPrams.toString()}`);
};
