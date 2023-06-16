import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = null;

const availableHotelsFilter = createSlice({
  name: 'availableHotelsFilter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (
      state,
      {
        payload: {
          search = '',
          checkIn = '',
          checkOut = '',
          adults = 0,
          children = 0,
          rooms = 0,
          childrenAges = [],
        },
      },
    ) => {
      return {
        search,
        checkIn,
        checkOut,
        adults,
        children,
        rooms,
        childrenAges,
      };
    },
  },
});
const { actions } = availableHotelsFilter;
export const { setFilter } = actions;
export default availableHotelsFilter;
