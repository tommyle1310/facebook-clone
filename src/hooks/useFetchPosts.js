import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../app/features/postSlice';
import useUserData from './useUserData';

const useFetchAllPost = () => {
    const dispatch = useDispatch();
    const { posts, loading: postsLoading } = useSelector(state => state.post);
    const [user] = useUserData(); // Assuming you have a custom hook for fetching user data
    const [loading, setLoading] = useState(false); // State variable to track loading state
    const [refetch, setRefetch] = useState(false); // State variable to trigger refetch

    useEffect(() => {
        const fetchAllPost = async (userId) => {
            try {
                setLoading(true); // Set loading to true while fetching data
                await dispatch(getAllPosts(userId));
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching all posts:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        if (user?.id) {
            fetchAllPost(user.id);
        }
    }, [dispatch, user, refetch]); // Include refetch in the dependencies array

    const handleRefetch = () => {
        setRefetch(prevRefetch => !prevRefetch); // Toggle the state to trigger refetch
    };

    return [posts, loading, handleRefetch]; // Return posts, loading state, and the refetch function
};

export default useFetchAllPost;
