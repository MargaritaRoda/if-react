export const setFilter = ({
  search = '',
  checkIn = '',
  checkOut = '',
  adults = 0,
  children = 0,
  rooms = 0,
  childrenAges = [],
}) => ({
  type: 'availableHotelsFilter/setFilter',
  payload: {
    search,
    checkIn,
    checkOut,
    adults,
    children,
    rooms,
    childrenAges,
  },
});
