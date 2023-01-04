import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk('user/signup', async (user) => {
    const userSignup = await axios.post('/signup', user);
    const res = await userSignup.data;
    return res;
});

export const loginUser = createAsyncThunk('user/login', async (user) => {
    const userLogin = await axios.post('/login', user);
    const res = await userLogin.data;
    return res;
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
    const userLogout = await axios.delete(`/logout`);
    const res = await userLogout.data;
    return res;
});

export const fetchUser = createAsyncThunk('user/getUser', async () => {
    try{
        const getUser = await axios.get('/me');
        const res = await getUser.data;
        if (getUser.status === 200) {
            return res;
          } else {
            return res.error;
          }
    } catch(e) {
        return e.error;
    }
});

export const postDonation = createAsyncThunk('user/donation', async (donation) => {
    const userDonation = await axios.post('/donations', donation);
    const res = await userDonation.data;
    return res;
});

export const usersSlice = createSlice({
    name: "users",
    initialState: {
      user: { recipients: [] },
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    },
    reducers: {
      clearState: (state) => {
          state.isError = false;
          state.isSuccess = false;
          state.isFetching = false;
    
          return state;
      },
    },
    extraReducers: {
      [signupUser.fulfilled]: (state, { payload }) => {
          state.isFetching = false;
          state.isSuccess = true;
          state.user = payload
      },
      [signupUser.pending]: (state) => {
          state.isFetching = true;
      },
      [signupUser.rejected]: (state, { payload }) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = payload.error;
      },
      [loginUser.fulfilled]: (state, { payload }) => {
          state.user = payload;
          state.isFetching = false;
          state.isSuccess = true;
          return state;
      },
      [loginUser.rejected]: (state, { payload }) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = payload.error;
      },
      [loginUser.pending]: (state) => {
          state.isFetching = true;
      },
      [fetchUser.fulfilled]: (state, { payload }) => {
          state.user = payload;
          state.isFetching = false;
          state.isSuccess = true;
          return state;
      },
      [fetchUser.rejected]: (state, { payload }) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = payload.error;
      },
      [fetchUser.pending]: (state) => {
          state.isFetching = true;
      },
      [postDonation.fulfilled]: (state, { payload }) => {
          state.user = {...state.user, donations:[...state.user.donations, payload]};
          state.isFetching = false;
          state.isSuccess = true;
          return state;
      },
    },
  })
  
  export const { clearState } = usersSlice.actions;
  export const userSelector = state => state.users

