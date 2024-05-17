import React from 'react'
import useTheme from '../../hooks/useTheme'
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const loginUser = async (userData) => {
        try {
            const response = await axios.post('/signin', userData);
            if (response.data.EC === 0) {
                navigate("/");
            }
            return response.data;
        } catch (error) {
            console.log(error.data);
            throw error.data;
        }
    };

    return (
        <AuthForm title='Login' onSubmit={loginUser} />
    )
}

export default Login
