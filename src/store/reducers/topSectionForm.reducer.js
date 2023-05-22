const INITIAL_STATE = {
  checkInOut: [],
  adults: 1,
  children: 0,
  rooms: 1,
  childrenAges: [],
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
      const newState = {
        ...state,
        children: action.payload,
      };

      if (newState.children > state.childrenAges.length) {
        const newChildrenAges = [...newState.childrenAges];
        for (let i = state.childrenAges.length; i < newState.children; i += 1) {
          newChildrenAges.push(0);
        }
        newState.childrenAges = newChildrenAges;
      } else if (newState.children < state.childrenAges.length) {
        const newChildrenAges = [...newState.childrenAges];
        newChildrenAges.splice(newState.children);
        newState.childrenAges = newChildrenAges;
      }
      return newState;
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
