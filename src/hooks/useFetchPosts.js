import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../app/features/postSlice';
import useUserData from './useUserData';

const useFetchAllPost = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.post);
    const [user] = useUserData(); // Assuming you have a custom hook for fetching user data

    useEffect(() => {
        const fetchAllPost = async (userId) => {
            try {
                await dispatch(getAllPosts(userId));
            } catch (error) {
                console.error('Error fetching all posts:', error);
            }
        };

        if (user?.id) {
            fetchAllPost(user.id);
        }
    }, [dispatch, user]);

    return [posts];
};

export default useFetchAllPost;
