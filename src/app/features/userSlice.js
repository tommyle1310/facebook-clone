// actions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export const fetchFriends = createAsyncThunk(
    'user/fetchFriends',
    async (userId) => {
        const response = await axios.get(`/users/${userId}/friends`);
        return response.data;
    }
);

export const fetchNonFriends = createAsyncThunk(
    'user/fetchNonFriends',
    async (userId) => {
        const response = await axios.get(`/users/${userId}/non-friends`);
        return response.data;
    }
);

// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    friends: [],
    nonFriends: [],
    loadingFriends: false,
    loadingNonFriends: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFriends.pending]: (state) => {
            state.loadingFriends = true;
        },
        [fetchFriends.fulfilled]: (state, action) => {
            state.loadingFriends = false;
            state.friends = action.payload;
        },
        [fetchFriends.rejected]: (state) => {
            state.loadingFriends = false;
        },
        [fetchNonFriends.pending]: (state) => {
            state.loadingNonFriends = true;
        },
        [fetchNonFriends.fulfilled]: (state, action) => {
            state.loadingNonFriends = false;
            state.nonFriends = action.payload;
        },
        [fetchNonFriends.rejected]: (state) => {
            state.loadingNonFriends = false;
        },
    },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;

export const userReducer = userSlice.reducer;
