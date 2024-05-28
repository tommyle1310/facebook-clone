import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchFriends } from '../../app/features/userSlice';

const useSearchFriends = (userId) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [localSearchResults, setLocalSearchResults] = useState([]);

    useEffect(() => {
        const handleSearch = async () => {
            if (searchQuery.trim() === '') {
                setLoading(false);
                setLocalSearchResults([]);
                return;
            }

            if (userId && searchQuery.trim()) {
                setLoading(true);
                const result = await dispatch(searchFriends({ userId, query: searchQuery }));
                console.log(result.payload);
                setLocalSearchResults(result.payload);
                setLoading(false);
            }
        };

        const debounceTimeout = setTimeout(handleSearch, 300);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [searchQuery, dispatch, userId]);

    return [searchQuery, setSearchQuery, localSearchResults, loading];
};

export default useSearchFriends;
