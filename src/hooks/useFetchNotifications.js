import React, { useEffect, useState } from 'react';
import useUserData from './useUserData';
import useFetchFriendsData from './useFetchFriendsData';
import { fetchFriendRequests } from '../app/features/userSlice';

const useFetchNotifications = () => {
    const [user] = useUserData();
    const [friendRequests, loadingFriendRequests] = useFetchFriendsData(user?.id, fetchFriendRequests);

    const [notifications, setNotifications] = useState([
        {
            id: 2,
            title: 'Earlier',
            items: [
                {
                    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
                    message: 'You have a memory with Mai Uchiha and Mai Uchiha to look back today.',
                    time: '4 days ago',
                    badge: 'bell',
                    badgeColor: 'info'
                },
                {
                    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
                    message: 'Tpp Mo Gaming was live. Check it out!',
                    time: '4 days ago',
                    badge: 'circle',
                    badgeColor: 'error'
                },
                {
                    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
                    message: 'React Native Devs has 2 new posts. Check it out!',
                    time: '4 days ago',
                    badge: 'people-group',
                    badgeColor: 'success'
                },
                {
                    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
                    message: 'Sa Nguyen mentioned you in a comment in MLBBVN community',
                    time: '4 days ago',
                    badge: 'tag',
                    badgeColor: 'warning'
                }
            ]
        }
    ]);

    useEffect(() => {
        if (friendRequests.length > 0) {
            setNotifications((prevNotifications) => {
                // Check if friendRequests are already included in the notifications
                const hasFriendRequests = prevNotifications.some(
                    (notification) => notification.friendRequests
                );

                if (hasFriendRequests) {
                    // Update existing friendRequests notification
                    return prevNotifications.map((notification) =>
                        notification.friendRequests ? { friendRequests } : notification
                    );
                } else {
                    // Add new friendRequests notification
                    return [{ friendRequests }, ...prevNotifications];
                }
            });
        }
    }, [friendRequests]);

    return [notifications];
};

export default useFetchNotifications;