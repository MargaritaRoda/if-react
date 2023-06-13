import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_HOTELS } from '../../services/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_HOTELS,
  }),
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: ({
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
        return `/api/hotels?${searchPrams.toString()}`;
      },
    }),
    getHotelsPopular: builder.query({
      query: () => '/api/hotels/popular',
    }),
  }),
});

export const { useGetHotelsQuery, useGetHotelsPopularQuery } = apiSlice;
