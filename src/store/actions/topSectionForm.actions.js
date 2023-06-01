export const setAdults = (payload) => ({
  type: 'topSectionForm/setAdults',
  payload,
});

export const setChildren = (payload) => ({
  type: 'topSectionForm/setChildren',
  payload: payload,
});

export const setRooms = (payload) => ({
  type: 'topSectionForm/setRooms',
  payload,
});
export const setChildrenAge = ({ index, value }) => ({
  type: 'topSectionForm/setChildrenAge',
  payload: { index, value },
});

export const setCheckInOut = ([checkIn, checkOut]) => ({
  type: 'topSectionForm/setCheckInOut',
  payload: [checkIn, checkOut],
});
