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


export const fetchFriendRequests = createAsyncThunk(
    'user/fetchFriendRequests',
    async (userId) => {
        const response = await axios.get(`/users/${userId}/friend-requests`);
        return response.data;
    }
);

export const toggleAddFriend = createAsyncThunk(
    'user/toggleAddFriend',
    async ({ userId, friendId }, { dispatch }) => {
        try {
            const response = await axios.post(`/users/${userId}/friends/${friendId}`);
            if (response.data.EC === 0) {
                await dispatch(fetchNonFriends(userId));
                await dispatch(fetchFriends(userId));
            }
            return response.data;
        } catch (error) {
            console.error('Error adding/removing friend:', error);
            throw error;
        }
    }
);



// Initial state
const initialState = {
    userData: {},
    friends: [],
    friendRequests: [],
    nonFriends: [],
    loadingFriends: false,
    loadingNonFriends: false,
    loadingFriendRequests: false
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

            .addCase(fetchFriendRequests.pending, (state) => {
                state.loadingFriendRequests = true;
            })
            .addCase(fetchFriendRequests.fulfilled, (state, action) => {
                state.loadingFriendRequests = false;
                state.friendRequests = action.payload;
            })
            .addCase(fetchFriendRequests.rejected, (state) => {
                state.loadingFriendRequests = false;
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
