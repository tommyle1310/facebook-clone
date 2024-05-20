import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserDataById } from '../app/features/userSlice';

const useProfileUserData = ({ userId }) => {
    const dispatch = useDispatch();
    const [resultProfile, setResultProfile] = useState({});
    const [isLoadingProfile, setIsLoadingProfile] = useState(true);

    const fetchData = useCallback(async () => {
        setIsLoadingProfile(true);
        const data = await dispatch(fetchUserDataById(userId)); // Pass the userId if needed
        if (data.type === "user/fetchUserDataById/fulfilled") {
            setResultProfile(data.payload);
            setIsLoadingProfile(false);
        }
    }, [dispatch, userId]);

    useEffect(() => {
        if (userId) {
            fetchData();
        }
    }, [fetchData, userId]);

    return [resultProfile, isLoadingProfile, fetchData];
};

export default useProfileUserData;
