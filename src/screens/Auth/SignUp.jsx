import React from 'react'
import AuthForm from '../../components/AuthForm'
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { signup } from '../../app/features/authSlice';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerUser = async (userData) => {
        dispatch(signup(userData, navigate));
    };
    return (
        <AuthForm title='Sign Up' onSubmit={registerUser} />
    )
}

export default SignUp
