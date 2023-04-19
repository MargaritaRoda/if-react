import axios from 'axios';
import { API_HOTELS_POPULAR_URL, API_HOTELS_URL } from '../config';

export const getPopularHotelsData = async () => {
  try {
    const response = await axios.get(API_HOTELS_POPULAR_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getHotelsData = async (search) => {
  try {
    const response = await axios.get(API_HOTELS_URL, {
      params: {
        search: search,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
