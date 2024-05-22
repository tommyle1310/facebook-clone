import React, { useEffect, useState, useCallback } from 'react';
import useUserData from './useUserData';
import useProfileUserData from './useProfileUserData';
import { useDispatch } from 'react-redux';
import { fetchAvatar } from '../app/features/userSlice';

const useFetchNotifications = () => {
    const dispatch = useDispatch();
    const [user] = useUserData();
    const [profileData, isLoadingProfile, refetchProfile] = useProfileUserData({ userId: user?.id });

    const defaultItemNotification = {
        id: 0,
        fromType: '',
        fromId: '',
        message: '',
        read: false,
        timestamp: '4 days',
        avatar: ''
    };

    const [notifications, setNotifications] = useState([defaultItemNotification]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNotificationAvatar = async (fromId) => {
        const response = await dispatch(fetchAvatar(fromId));
        return response.payload;
    };

    const filterAndSetNotifications = useCallback(async () => {
        if (isLoadingProfile) {
            setIsLoading(true);
            return;
        }

        if (profileData?.notifications?.length > 0) {
            // Filter notifications for FRIEND_REQUEST, FRIEND_ACCEPT, and POST_LIKE
            const filteredNotifications = profileData.notifications.filter(item =>
                item.type === "FRIEND_REQUEST" ||
                item.type === "FRIEND_ACCEPT" ||
                item.type === "POST_LIKE"
            );

            // Fetch avatars and set notifications
            const notificationList = await Promise.all(filteredNotifications.map(async (item) => {
                const avatar = await fetchNotificationAvatar(item.fromId);

                return {
                    id: item.id,
                    fromType: item.fromType,
                    fromId: item.fromId,
                    type: item.type,
                    avatar: avatar,
                    message: item.message,
                    read: item.read,
                    timestamp: item.timestamp
                };
            }));

            setNotifications(notificationList);
        } else {
            setNotifications([]);
        }

        setIsLoading(false);
    }, [profileData, isLoadingProfile, dispatch]);

    useEffect(() => {
        filterAndSetNotifications();
    }, [filterAndSetNotifications]);

    return [notifications, isLoading, refetchProfile];
};

export default useFetchNotifications;
