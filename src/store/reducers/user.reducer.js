const INITIAL_STATE = {
  email: '',
  password: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'user/login': {
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case 'user/logout': {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};
