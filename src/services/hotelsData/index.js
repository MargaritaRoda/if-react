import axios from 'axios';
import { API_HOTELS_POPULAR_URL, API_HOTELS_URL } from '../config';

export const getRequest = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPopularHotelsData = async () => {
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
  return getRequest(API_HOTELS_URL, {
    params: {
      checkIn,
      search,
      checkOut,
      adults,
      children,
      childrenAges,
      rooms,
    },
  });
};
