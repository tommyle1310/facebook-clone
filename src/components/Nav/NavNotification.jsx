import React, { useState } from 'react'
import useFetchNotifications from '../../hooks/useFetchNotifications';
import { acceptFriendRequest } from '../../app/features/userSlice';
import { useDispatch } from 'react-redux';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';

const NavNotification = () => {
    const dispatch = useDispatch();
    const [user] = useUserData();

    const [notifications, isLoadingNotifications, refetchNotifications] = useFetchNotifications();
    const [notificationTab, setNotificationTab] = useState(0)
    const handleToggleAddFriend = async ({ userId, friendId }) => {
        const response = await dispatch(acceptFriendRequest({ userId, friendId }))
        console.log(response.data);
        // Refetch non-friends data after toggling friend status
        refetchNotifications();
    };
    return (
        <button tabIndex={0} role="button" className="btn btn-ghost btn-circle text-lg dropdown">
            <i className="fa-solid fa-bell"></i>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow rounded-box w-52 right-56">
                <div className="tw-fc gap-3 items-start p-5 overflow-y-auto bg-base-100 min-h-screen w-[30rem]">
                    <h3 className="text-xl font-bold">Notifications</h3>
                    <div role="tablist" className="tabs tabs-boxed bg-base-200">
                        <a onClick={() => { setNotificationTab(0) }} role="tab" className={`tab ${notificationTab === 0 && 'tab-active'}`}>All</a>
                        <a onClick={() => { setNotificationTab(1) }} role="tab" className={`tab ${notificationTab === 1 && 'tab-active'}`}>Unread</a>
                    </div>
                    <div className="w-full tw-fc gap-3">
                        {isLoadingNotifications ?
                            <div className="w-full min-h-screen tw-cc"><span className="pt-20  mx-auto loading loading-spinner text-success"></span></div>
                            :
                            <div className='w-full tw-fc'>
                                <div className="p-3 tw-fc gap-2">
                                    <div className="flex tw-jb">
                                        <h5 className="text-lg font-semibold">Friend requests</h5>
                                        <Link to='/friends' className="text-info tw-hv hover:text-primary">See All</Link>
                                    </div>
                                    {
                                        notificationTab === 0 ?
                                            notifications?.map((item) => (
                                                <div key={item.id} className="tw-jb gap-3">
                                                    <Avatar image={item.avatar} />
                                                    {
                                                        item.type === "FRIEND_REQUEST" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="flex flex-col items-start ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                            <div className="tw-jb gap-1">
                                                                <a onClick={() => handleToggleAddFriend({ userId: user?.id, friendId: item?.fromId })} className="btn w-1/2 btn-primary">Accept</a>
                                                                <a className="btn w-1/2 btn-secondary">Remove</a>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "FRIEND_ACCEPT" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="flex flex-col items-start ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "POST_LIKE" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="flex flex-col items-start ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "POST_COMMENT" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="flex flex-col items-start ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    <div className="w-5 tw-cc">
                                                        <i className="fa-solid text-primary fa-circle"></i>
                                                    </div>
                                                </div>
                                            ))
                                            :
                                            notifications?.filter(item => item.read === false)?.map((item) => (
                                                <div key={item.id} className="tw-jb gap-3">
                                                    <Avatar image={item.avatar} />
                                                    {
                                                        item.type === "FRIEND_REQUEST" &&
                                                        <div className="flex-1 tw-fc gap-1">
                                                            <div className="tw-jb">
                                                                <h5 className="font-semibold">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                            <div className="tw-jb gap-1">
                                                                <div onClick={() => handleToggleAddFriend({ userId: user?.id, friendId: item?.fromId })} className="btn w-1/2 btn-primary">Accept</div>
                                                                <div className="btn w-1/2 btn-secondary">Remove</div>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "FRIEND_ACCEPT" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="tw-jb ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "POST_LIKE" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="tw-jb ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "POST_LIKE" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="flex flex-col items-start ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.type === "POST_COMMENT" &&
                                                        <div className="flex-1 tw-fc gap-1 ">
                                                            <div className="flex flex-col items-start ">
                                                                <h5 className="font-semibold ">{item.message}</h5>
                                                                <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                            </div>
                                                        </div>
                                                    }
                                                    <div className="w-5 tw-cc">
                                                        <i className="fa-solid text-primary fa-circle"></i>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </ul>
        </button>
    )
}

export default NavNotification
