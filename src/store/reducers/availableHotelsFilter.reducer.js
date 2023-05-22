const INITIAL_STATE = null;

export const availableHotelsFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'availableHotelsFilter/setFilter': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
