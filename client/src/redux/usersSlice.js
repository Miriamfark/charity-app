import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export const signupUser = createAsyncThunk('user/signup', async (user) => {
    const userSignup = await axios.post('/signup', user);
    const res = await userSignup.data;
    return res;
});

export const loginUser = createAsyncThunk('user/login', async (user) => {
    const userLogin = await axios.post('/login', user);
    const res = await userLogin.data;
    return res
});

export const logoutUser = createAsyncThunk('user/logout', async (id) => {
    const userLogout = await axios.delete(`/logout`);
    return id;
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
 const newDonation = await fetch('/donations', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(donation)
})

const data = await newDonation.json()
        if (newDonation.ok) {
            return data
        } else {
            return data.errors
        }
    })

export const removeDonation = createAsyncThunk('user/removeDonation', async (data) => {
    const donation = await fetch(`/donations/${data.donationId}`, { method: "DELETE" })
    return data;
})

export const updateDonation = createAsyncThunk('user/updateDonation', async (donationData) => {
    const donation = await fetch(`/donations/${donationData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donationData)
          })
          return donation.json()
})

export const updateSumDonations = createAsyncThunk('user/updateSumDonations', async (recipientId) => {
    const recipient = await fetch(`/recipients/${recipientId}`)
    console.log("recipient", recipient)
    return recipient.json()
})


export const usersSlice = createSlice({
    name: "users",
    initialState: {
      user: { recipients: [], donations: [] },
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
          state.errorMessage = false
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
          state.isError = false;
          console.log("fulfilled", payload)
          return state;
      },
      [loginUser.rejected]: (state) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = "Invalid username or password";
      },
      [loginUser.pending]: (state) => {
          state.isFetching = true;
      },
      [logoutUser.fulfilled]: (state) => {
        state.user = null;
        state.isFetching = false;
        state.isSuccess = true;
        state.isError = false;
        console.log("logged out!")
        return state;
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
        if (payload.donation) {
          state.user = {...state.user, recipients: [...state.user.recipients, payload.recipient], donations:[...state.user.donations, payload.donation]};
          state.isFetching = false;
          console.log("success", payload)
          state.isSuccess = true;
          return state;
        } else {
            state.isError = true
            state.errorMessage = payload
            console.log("error", payload)
        }
      },
      
      [removeDonation.fulfilled]: (state, { payload }) => {
        const filteredDonations = state.user.donations.filter((donation) => donation.id !== payload.donationId)
        //this removes the recipient from the list of my recipients and triggers page to navigate away from the recipient card - it is
        //only good if deleting the only donation made to this page
        // const filteredRecipients = state.user.recipients.filter((recipient) => recipient.id !== payload.recipientId)
        state.user.donations = filteredDonations
        // console.log("filteredRecipients:", filteredRecipients)
        //setting state to exclude that recipient
        // state.user.recipients = filteredRecipients
        state.isFetching = false;
        state.isSuccess = true;
        state.isError = false;
        return state;
        },
        [updateDonation.fulfilled]: (state, { payload }) => {
            let patchedDonation = state.user.donations.filter((donation) => donation.id == payload.id)[0]
            patchedDonation = {...patchedDonation, amount: payload.amount}
            state.user = {...state.user, donations: state.user.donations.map((d) => {
                return d.id !== patchedDonation.id ? d : patchedDonation
            })}
            state.isFetching = false;
            state.isSuccess = true;
            console.log("in the reducer", payload)
            return state;
            },
        [updateSumDonations.fulfilled]: (state, { payload }) => {
            let updatedRecipient = state.user.recipients.filter((recipient) => {
                return recipient.id === payload.id
            })[0]
            updatedRecipient = {...updatedRecipient, sum_donations: payload.sum_donations}
            state.user = {...state.user, recipients: state.user.recipients.map((r) => {
                return r.id !== updatedRecipient.id ? r : updatedRecipient
            })}
            state.isFetching = false;
            state.isSuccess = true;
            state.isError = false;
            console.log("payload:", payload)
            console.log("updatedRecipient:", updatedRecipient)
            return state;
        },
    },
  })
  
  export const { clearState } = usersSlice.actions;
  export const userSelector = state => state.users

