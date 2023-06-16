import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  checkInOut: [],
  adults: 1,
  children: 0,
  rooms: 1,
  childrenAges: [],
};

const prepareChildrenAgesArray = (children, childrenAges) => {
  let newChildrenAges = childrenAges;
  if (children > childrenAges.length) {
    newChildrenAges = [...newChildrenAges];
    for (let i = childrenAges.length; i < children; i += 1) {
      newChildrenAges.push(0);
    }
  } else if (children < childrenAges.length) {
    newChildrenAges = [...newChildrenAges];
    newChildrenAges.splice(children);
  }
  return newChildrenAges;
};

const topSectionForm = createSlice({
  name: 'topSectionForm',
  initialState: INITIAL_STATE,
  reducers: {
    setAdults: (state, { payload }) => {
      return {
        ...state,
        adults: payload,
      };
    },
    setRooms: (state, { payload }) => {
      return {
        ...state,
        rooms: payload,
      };
    },
    setChildren: (state, { payload }) => {
      return {
        ...state,
        children: payload,
        childrenAges: prepareChildrenAgesArray(payload, state.childrenAges),
      };
    },
    setChildrenAge: (state, { payload: { index, value } }) => {
      const newChildrenAges = [...state.childrenAges];
      newChildrenAges[index] = value;
      return {
        ...state,
        childrenAges: newChildrenAges,
      };
    },
    setCheckInOut: (state, { payload: [checkIn, checkOut] }) => {
      return {
        ...state,
        checkInOut: [checkIn, checkOut],
      };
    },
  },
});
const { actions } = topSectionForm;
export const {
  setAdults,
  setRooms,
  setChildren,
  setChildrenAge,
  setCheckInOut,
} = actions;
export default topSectionForm;
