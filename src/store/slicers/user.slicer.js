import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, { payload }) => payload,
    logout: () => INITIAL_STATE,
  },
});
const { actions } = user;
export const { login, logout } = actions;
export default user;
