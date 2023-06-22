import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_id: '',
  user_login: '',
  user_email: ''
};

const AuthSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user_email = payload.user_email;
      state.user_id = payload.user_id;
      state.user_login = payload.user_login;
    },
    logoutUser: (state) => {
      state.user_email = state.user_id = state.user_login = '';
    }
  }
});

export const { loginUser, logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
