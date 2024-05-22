// Import necessary libraries and modules
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

// Initial state definition
const initialState = {
    posts: [],
    errorMessage: '',
    loading: false,
};

// Create slice
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        createPostSuccess(state, action) {
            state.posts.unshift(action.payload);
            state.errorMessage = '';
        },
        getAllPostsRequest(state) {
            state.loading = true;
            state.errorMessage = '';
        },
        getAllPostsSuccess(state, action) {
            state.loading = false;
            state.posts = action.payload;
            state.errorMessage = '';
        },
        getAllPostsFailure(state, action) {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        addError(state, action) {
            state.errorMessage = action.payload;
        },
        clearErrorMessage(state) {
            state.errorMessage = '';
        },
    },
});

// Export actions
export const {
    createPostSuccess,
    getAllPostsRequest,
    getAllPostsSuccess,
    getAllPostsFailure,
    addError,
    clearErrorMessage,
} = postSlice.actions;

// Thunks
export const createPost = ({ userId, postData }) => async (dispatch) => {
    try {
        // Validate the input
        if (!userId || !postData) {
            return dispatch(addError('Invalid input data'));
        }
        console.log(postData);
        const response = await axios.post('/posts/create', { userId, postData });
        if (response.data) {
            if (response.data.EC === 0) {
                dispatch(createPostSuccess(response.data.post));
            } else if (response.data.EC === -3) {
                dispatch(addError('User not found'));
            } else {
                dispatch(addError(response.data.EM || 'Something went wrong on the server, please try again later.'));
            }
        }
        return response.data
    } catch (error) {
        console.error(error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when creating the post.';
        dispatch(addError(errorMessage));
    }
};

export const getAllPosts = (userId) => async (dispatch) => {
    dispatch(getAllPostsRequest());
    try {
        const response = await axios.get(`/posts/${userId}`);
        dispatch(getAllPostsSuccess(response.data));
    } catch (error) {
        console.error(error);
        dispatch(getAllPostsFailure('Failed to fetch posts.'));
    }
};

// Selectors
export const selectPost = (state) => state.post;

export default postSlice.reducer;
export const postReducer = postSlice.reducer;
