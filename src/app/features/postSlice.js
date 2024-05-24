// Import necessary libraries and modules
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

// Initial state definition
const initialState = {
    posts: [],
    likedPosts: [],
    userPosts: [],
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
        getUserPostsRequest(state) {
            state.loading = true;
            state.errorMessage = '';
        },
        toggleLikePostSuccess(state, action) {
            state.loading = false;
            state.likedPosts = action.payload;
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
        getUserPostsSuccess(state, action) {
            state.loading = false;
            state.userPosts = action.payload;
            state.errorMessage = '';
        },
        getUserPostsFailure(state, action) {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        addCommentSuccess(state, action) {
            const { postId, comment } = action.payload;
            const post = state.posts.find(p => p.id === postId);
            if (post) {
                // Initialize comments array if it doesn't exist
                if (!post.comments) {
                    post.comments = [];
                }
                post.comments.unshift(comment);
            }
            state.errorMessage = '';
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
    getUserPostsRequest,
    getUserPostsSuccess,
    getUserPostsFailure,
    toggleLikePostSuccess,
    addCommentSuccess,
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
        const response = await axios.post('/posts/create', { userId, postData });
        if (response.data) {
            if (response.data.EC === 0) {
                dispatch(createPostSuccess(response.data.post));
            } else if (response.data.EC === -3) {
                dispatch(addError('User not found'));
            } else {
                dispatch(addError(response.data.EM || 'Something went wrong on the server, please try again later.'));
            }
            return response.data
        }
    } catch (error) {
        console.error(error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when creating the post.';
        dispatch(addError(errorMessage));
    }
};

export const toggleLikePost = ({ userId, postId }) => async (dispatch) => {
    try {
        // Validate the input
        if (!userId || !postId) {
            return dispatch(addError('Invalid input data'));
        }
        const response = await axios.post('/posts/like-post', { userId, postId });
        if (response.data) {
            if (response.data.EC === 0) {
                const likedPostsResponse = await axios.get(`/posts/${userId}/liked-posts`);
                dispatch(toggleLikePostSuccess(likedPostsResponse.data.data));
            } else if (response.data.EC === -3) {
                dispatch(addError('User not found'));
            } else {
                dispatch(addError(response.data.EM || 'Something went wrong on the server, please try again later.'));
            }
        }
    } catch (error) {
        console.error(error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when toggling the like.';
        dispatch(addError(errorMessage));
    }
};

export const getAllPosts = (userId) => async (dispatch) => {
    dispatch(getAllPostsRequest());
    try {
        const response = await axios.get(`/posts/${userId}`);
        if (response.data.EC === 0) {
            dispatch(getAllPostsSuccess(response.data.data));
        }
    } catch (error) {
        console.error(error);
        dispatch(getAllPostsFailure('Failed to fetch posts.'));
    }
};

export const getUserPosts = (userId, viewerId) => async (dispatch) => {
    dispatch(getUserPostsRequest());
    try {
        const response = await axios.get(`/posts/from/${userId}/${viewerId}`);
        if (response.data.EC === 0) {
            dispatch(getUserPostsSuccess(response.data.data));
        }
    } catch (error) {
        console.error(error);
        dispatch(getUserPostsFailure('Failed to fetch posts.'));
    }
};

export const getLikedPosts = (userId) => async (dispatch) => {
    dispatch(getAllPostsRequest());
    try {
        const response = await axios.get(`/posts/${userId}/liked-posts`);
        dispatch(toggleLikePostSuccess(response.data.data));
        console.log(response.data);
    } catch (error) {
        console.error(error);
        dispatch(getAllPostsFailure('Failed to fetch posts.'));
    }
};

export const addCommentToPost = ({ userId, postId, commentData }) => async (dispatch) => {
    try {
        // Validate the input
        if (!userId || !postId || !commentData || !commentData.content) {
            return dispatch(addError('Invalid input data'));
        }
        const response = await axios.post('/posts/comment-post', { userId, postId, commentData });
        if (response.data) {
            if (response.data.EC === 0) {
                dispatch(addCommentSuccess({ postId, comment: response.data.data }));
            } else if (response.data.EC === -3) {
                dispatch(addError('User not found'));
            } else {
                dispatch(addError(response.data.EM || 'Something went wrong on the server, please try again later.'));
            }
            return response.data
        }
    } catch (error) {
        console.error(error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when adding the comment.';
        dispatch(addError(errorMessage));
    }
};

export const getPostComments = (postId) => async (dispatch) => {
    try {
        // Dispatch action to set loading state
        dispatch(getAllPostsRequest());

        // Send request to backend to fetch post comments
        const response = await axios.get(`/posts/${postId}/comments`);

        // Check if response is successful
        if (response.data.EC === 0) {
            // Dispatch action to set post comments
            dispatch(addCommentSuccess({ postId, comment: response.data.data }));
        } else if (response.data.EC === -1) {
            // Dispatch action to handle post not found
            dispatch(addError('Post not found'));
        } else {
            // Dispatch action to handle other errors
            dispatch(addError(response.data.EM || 'Failed to fetch post comments.'));
        }
        return response.data
    } catch (error) {
        // Handle network or server errors
        console.error(error);
        dispatch(addError('Failed to fetch post comments. Please try again later.'));
    }
};


// Selectors
export const selectPost = (state) => state.post;

export default postSlice.reducer;
export const postReducer = postSlice.reducer;
