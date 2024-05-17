import React from 'react'
import AuthForm from '../../components/AuthForm'
import axios from '../../api/axios';
// import { registerUser } from '../../app/features/authSlice';


const SignUp = () => {

    const registerUser = async ({ email, password, name }) => {
        dispatch(registerUser({ email, password, name }));
    };
    return (
        <AuthForm title='Sign Up' onSubmit={registerUser} />
    )
}

export default SignUp
