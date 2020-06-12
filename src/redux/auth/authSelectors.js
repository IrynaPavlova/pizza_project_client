const isAuthenticated = ({ auth }) => auth.token;

const getUserName = ({ auth }) => auth.user.username;
const getUserEmail = ({ auth }) => auth.user.email;
const getError = ({ auth }) => auth.error;
const getLoading = ({ auth }) => auth.loading;

export default {
  isAuthenticated,
  getUserName,
  getError,
  getLoading,
  getUserEmail,
};
