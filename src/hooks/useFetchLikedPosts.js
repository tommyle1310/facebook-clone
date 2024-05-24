import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedPosts } from '../app/features/postSlice'; // Import your slice action
import useUserData from './useUserData';

const useFetchLikedPosts = () => {
    const dispatch = useDispatch();
    const user = useUserData(); // Assuming useUserData returns an array where user is the first element
    const { likedPosts: likedPostsRedux, loading } = useSelector(state => state.post); // Assuming your liked posts are stored in state.post
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        if (user?.id) {
            dispatch(getLikedPosts(user.id));
        }
    }, [dispatch, user?.id]);

    useEffect(() => {
        setLikedPosts(likedPostsRedux);
    }, [likedPostsRedux]);

    const refetch = () => {
        if (user?.id) {
            dispatch(getLikedPosts(user.id));
        }
    };

    return { likedPosts, loading, refetch };
};

export default useFetchLikedPosts;
