import axios from 'axios';
import { API_HOTELS_POPULAR_URL, API_HOTELS_URL } from '../config';

export const getRequest = async (url, params) => {
  try {
    const response = await axios.get(url, params);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPopularHotelsData = async () => {
  return getRequest(API_HOTELS_POPULAR_URL);
};

export const getHotelsData = async (search) => {
  return getRequest(API_HOTELS_URL, {
    params: {
      search: search,
    },
  });
};
