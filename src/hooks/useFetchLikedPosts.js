import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedPosts } from '../app/features/postSlice'; // Import your slice action
import useUserData from './useUserData';

const useFetchLikedPosts = () => {
    const dispatch = useDispatch();
    const user = useUserData(); // Assuming useUserData returns an array where user is the first element
    const { likedPosts, loading } = useSelector(state => state.post); // Assuming your liked posts are stored in state.post

    useEffect(() => {
        if (user?.id) {
            dispatch(getLikedPosts(user.id));
        }
    }, [dispatch, user?.id]);

    const refetch = () => {
        if (user?.id) {
            dispatch(getLikedPosts(user.id));
        }
    };

    return { likedPosts, loading, refetch };
};

export default useFetchLikedPosts;
