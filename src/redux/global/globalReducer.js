import { combineReducers } from 'redux';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const modalLogoutOpenReducer = (state = false, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  loading: loadingReducer,
  modalLogoutOpen: modalLogoutOpenReducer,
});
