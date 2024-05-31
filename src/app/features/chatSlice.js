import { createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { fetchFriends } from './userSlice';

// Initial state definition
const initialState = {
    currentChatUsers: [],
    error: null,  // Add error field to initial state
};

// Create slice
const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addUserChatSuccess: (state, action) => {
            const existingUserIndex = state.currentChatUsers.findIndex(item => item.id === action.payload.id);
            if (existingUserIndex >= 0) {
                // Move the existing user to the beginning
                const existingUser = state.currentChatUsers.splice(existingUserIndex, 1)[0];
                state.currentChatUsers.unshift(existingUser);
            } else {
                // Add the new user to the beginning
                state.currentChatUsers.unshift(action.payload);
            }
        },
        closeUserChatSuccess: (state, action) => {
            state.currentChatUsers = state.currentChatUsers.filter(user => user.id !== action.payload.id);
        },
        // Define the addError reducer
        addError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});


// Export actions
export const { addUserChatSuccess, closeUserChatSuccess, addError, clearError } = chatSlice.actions;

// Thunks
export const addUserChat = ({ userId, chatUserId }) => async (dispatch) => {
    try {
        // Validate the input
        if (!userId || !chatUserId) {
            throw new Error('Invalid data');
        }

        const resChatData = await dispatch(fetchFriends(userId));

        const chatUser = resChatData?.payload?.find(item => item.id === chatUserId);
        if (!chatUser) {
            throw new Error('Chat user not found');
        }

        const { name, id, profilePic } = chatUser;
        const response = await axios.get(`/chat/${userId}/${id}`);
        const responseChatContent = response.data.map(item => ({
            content: item.content,
            imageUrl: item.imageUrl,
            videoUrl: item.videoUrl,
            id: item.id,
            sender: item.senderId === userId
        }));

        const newChatUser = { name, id, profilePic, link: '', chatContent: responseChatContent, isOnline: false };
        dispatch(addUserChatSuccess(newChatUser));
        dispatch(clearError())
    } catch (error) {
        console.error('Error in addUserChat:', error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when creating the chat.';
        dispatch(addError(errorMessage));
    }
};

export const closeUserChat = ({ userId, chatUserId }) => async (dispatch) => {
    // console.log(chatUserId);
    try {
        // Validate the input
        if (!userId || !chatUserId) {
            throw new Error('Invalid data');
        }

        // Fetch friends
        const resChatData = await dispatch(fetchFriends(userId));
        // console.log('Fetched friends payload:', resChatData.payload); // Log the payload

        // Ensure the payload exists and is an array before attempting to find the chat user
        if (!resChatData.payload || !Array.isArray(resChatData.payload)) {
            throw new Error('Invalid response from server');
        }

        // Log the chatUserId
        // console.log('Chat user ID:', chatUserId);

        // Find chat user
        const chatUser = resChatData.payload.find(item => item.id === chatUserId);
        // console.log('Chat user:', chatUser); // Log the chat user found

        if (!chatUser) {
            throw new Error('Chat user not found');
        }

        const { name, id, profilePic } = chatUser;

        // No need to make any API calls since we're simulating closing the chat
        const newChatUser = { name, id, profilePic, link: '', chatContent: [], isOnline: false };

        // Dispatch the closeUserChatSuccess action
        dispatch(closeUserChatSuccess(newChatUser));
        dispatch(clearError());
    } catch (error) {
        console.error('Error in closeUserChat:', error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when closing the chat.';
        dispatch(addError(errorMessage));
    }
};



// Selectors
export const selectChat = (state) => state.chat;

export default chatSlice.reducer;
export const chatReducer = chatSlice.reducer;
