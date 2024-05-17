import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUserDataById } from '../app/features/userSlice';

const useProfileUserData = ({ userId }) => {
    const dispatch = useDispatch()
    const [resultProfile, setResultProfile] = useState({})
    const [isLoadingProfile, setIsLoadingProfile] = useState(true)

    useEffect(() => {
        setIsLoadingProfile(true)
        const fetchData = async () => {

            // Simulate a 3-second delay
            await new Promise(resolve => setTimeout(resolve, 3000));
            const data = await dispatch(fetchUserDataById(userId)); // Pass the userId if needed
            if (data.type === "user/fetchUserDataById/fulfilled") {
                setResultProfile(data.payload);
                setIsLoadingProfile(false)
            }
        };

        fetchData();
    }, [dispatch, userId]);
    return [resultProfile, isLoadingProfile]
}

export default useProfileUserData
