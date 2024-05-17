// Import necessary libraries and modules
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';

// Initial state definition
const initialState = {
    token: null,
    errorMessage: '',
    email: '',
    name: '',
    id: ''
};

// Create slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInSuccess(state, action) {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.errorMessage = '';
        },
        signUpSuccess(state, action) {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.errorMessage = '';
        },
        signOutSuccess(state) {
            state.token = null;
            state.email = '';
            state.name = '';
            state.errorMessage = '';
            state.id = '';
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
    signInSuccess,
    signUpSuccess,
    signOutSuccess,
    addError,
    clearErrorMessage,
} = authSlice.actions;

// Export reducer by named export
export const authReducer = authSlice.reducer;

// Thunks
export const getUserInfo = () => async (dispatch) => {
    try {
        const email = await localStorage.getItem('email');
        const name = await localStorage.getItem('name');
        const token = await localStorage.getItem('token');
        const id = await localStorage.getItem('id');
        if (email && name && token && id) {
            dispatch(signInSuccess({ token, email, name, id }));
        }
    } catch (err) {
        console.log(err);
    }
};

export const checkUserAlreadyLoggedIn = (navigate) => async (dispatch, getState) => {
    const { auth } = getState();
    try {
        const token = auth.token || localStorage.getItem('token');
        const email = auth.email || localStorage.getItem('email');
        const name = auth.name || localStorage.getItem('name');
        if (token) {
            dispatch(signInSuccess({ token, email, name }));
            navigate('/home');
        } else {
            navigate('/signin');
        }
    } catch (err) {
        console.log(err);
        navigate('/signin');
    }
};

export const signin = ({ email, password }, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('/signin', { email, password });
        if (response.data) {
            const { token, email, name, id } = response.data;
            if (response.data.EC === 0) {
                localStorage.setItem('token', token);
                localStorage.setItem('email', email);
                localStorage.setItem('name', name);
                localStorage.setItem('id', id);
                dispatch(signInSuccess({ token, email, name, id }));
                navigate('/');
            }
            else if (response.data.EC === 2) {
                dispatch(addError('Invalid Email or Password'));
            }
            else {
                dispatch(addError('Something went wrong in the server, please try again later.'));

            }
        }
    } catch (error) {
        console.log(error);
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong when signing you in.';
        dispatch(addError(errorMessage));
    }
};

export const signup = ({ email, password, name }, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('/signup', { email, password, name });
        if (response.data) {
            const { token, email, name } = response.data;
            if (response.data.EC === 0) {

                localStorage.setItem('token', token);
                localStorage.setItem('email', email);
                localStorage.setItem('name', name);
                dispatch(signUpSuccess({ token, email, name }));
                navigate('/login');
            }
            else if (response.data.EC === 2) {
                dispatch(addError('Invalid Email or Password'));
            }
            else {
                dispatch(addError('Something went wrong in the server, please try again later.'));

            }
        }
    } catch (error) {
        const errorMessage = error.response ? error.response.data.error : 'Something went wrong with the server';
        dispatch(addError(errorMessage));
    }
};

export const signout = (navigate) => async (dispatch) => {
    dispatch(signOutSuccess());
    try {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/login');
    } catch (error) {
        console.error(error);
    }
};

// Hook to get dispatch
export const useAuthDispatch = () => useDispatch();

// Selectors
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
