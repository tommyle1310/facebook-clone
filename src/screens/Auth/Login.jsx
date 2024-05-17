import React from 'react'
import useTheme from '../../hooks/useTheme'
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../app/features/authSlice';


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginUser = async (userData) => {
        dispatch(signin(userData, navigate));
    };

    return (
        <>
            <AuthForm title='Login' onSubmit={loginUser} />
        </>
    )
}

export default Login
