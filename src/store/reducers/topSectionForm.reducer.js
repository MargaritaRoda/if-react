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
export const topSectionFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'topSectionForm/setAdults': {
      return {
        ...state,
        adults: action.payload,
      };
    }
    case 'topSectionForm/setRooms': {
      return {
        ...state,
        rooms: action.payload,
      };
    }
    case 'topSectionForm/setChildren': {
      return {
        ...state,
        children: action.payload,
        childrenAges: prepareChildrenAgesArray(
          action.payload,
          state.childrenAges,
        ),
      };
    }
    case 'topSectionForm/setChildrenAge': {
      const newChildrenAges = [...state.childrenAges];
      newChildrenAges[action.payload.index] = action.payload.value;
      return {
        ...state,
        childrenAges: newChildrenAges,
      };
    }
    case 'topSectionForm/setCheckInOut': {
      return {
        ...state,
        checkInOut: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
