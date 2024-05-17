import React from 'react'
import AuthForm from '../../components/AuthForm'
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();

    const registerUser = async (userData) => {
        try {
            const response = await axios.post('/signup', userData);
            if (response.data.EC === 0) {
                navigate("/login");
            }
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.data);
            throw error;
        }
    };
    return (
        <AuthForm title='Sign Up' onSubmit={registerUser} />
    )
}

export default SignUp
