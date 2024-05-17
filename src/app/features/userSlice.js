import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

// Thunks
export const fetchUserDataById = createAsyncThunk(
    'user/fetchUserDataById',
    async (userId) => {
        const response = await axios.get(`/users/${userId}`);
        return response.data;
    }
);

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

export const toggleAddFriend = createAsyncThunk(
    'user/toggleAddFriend',
    async ({ userId, friendId }, { dispatch }) => {
        try {
            console.log(userId, friendId);
            const response = await axios.post(`/users/${userId}/friends/${friendId}`);
            console.log(response.data);
            if (response.data.EC === 0) {
                // Dispatch fetchNonFriends and fetchFriends after adding/removing a friend
                await dispatch(fetchNonFriends(userId));
                await dispatch(fetchFriends(userId));
            }
            return response.data;
        } catch (error) {
            // Handle error if the POST request fails
            console.error('Error adding/removing friend:', error);
            throw error;
        }
    }
);

// Initial state
const initialState = {
    userData: {},
    friends: [],
    nonFriends: [],
    loadingFriends: false,
    loadingNonFriends: false,
};

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFriends.pending, (state) => {
                state.loadingFriends = true;
            })
            .addCase(fetchFriends.fulfilled, (state, action) => {
                state.loadingFriends = false;
                state.friends = action.payload;
            })
            .addCase(fetchFriends.rejected, (state) => {
                state.loadingFriends = false;
            })
            .addCase(toggleAddFriend.pending, (state) => {
                state.loadingNonFriends = true;
            })
            .addCase(toggleAddFriend.fulfilled, (state, action) => {
                state.loadingNonFriends = false;
            })
            .addCase(toggleAddFriend.rejected, (state) => {
                state.loadingNonFriends = false;
            })
            .addCase(fetchNonFriends.pending, (state) => {
                state.loadingNonFriends = true;
            })
            .addCase(fetchNonFriends.fulfilled, (state, action) => {
                state.loadingNonFriends = false;
                state.nonFriends = action.payload;
            })
            .addCase(fetchNonFriends.rejected, (state) => {
                state.loadingNonFriends = false;
            });
    },
});


export const selectUser = (state) => state.user;

export default userSlice.reducer;

export const userReducer = userSlice.reducer;
