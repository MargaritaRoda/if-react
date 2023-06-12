import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = 'light';
const theme = createSlice({
  name: 'theme',
  initialState: INITIAL_STATE,
  reducers: {
    toggleTheme: (state) => {
      if (state === 'light') {
        return 'dark';
      }
      return 'light';
    },
  },
});
const { actions } = theme;
export const { toggleTheme } = actions;

export default theme;
