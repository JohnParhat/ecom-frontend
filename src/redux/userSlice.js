import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    registerErrorMessage: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    setRegisterErrorMessage: (state, action) => {
      state.registerErrorMessage = action.payload;
    },
    clearRegisterErrorMessage: (state) => {
      state.registerErrorMessage = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setRegisterErrorMessage,
  clearRegisterErrorMessage,
} = userSlice.actions;
export default userSlice.reducer;
