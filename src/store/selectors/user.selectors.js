export const selectIsUserAuthorized = (state) => {
  return state.user.email !== '';
};
