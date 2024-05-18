import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useFetchFriendsData = (userId, fetchThunk) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const resultAction = await dispatch(fetchThunk(userId));
            if (fetchThunk.fulfilled.match(resultAction)) {
                setData(resultAction.payload);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, fetchThunk, userId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetchNonFriendsData = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return [data, isLoading, refetchNonFriendsData];
};

export default useFetchFriendsData;
