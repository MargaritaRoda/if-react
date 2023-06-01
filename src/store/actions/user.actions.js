export const login = ({ email, password }) => ({
  type: 'user/login',
  payload: { email, password },
});

export const logout = () => ({
  type: 'user/logout',
});
