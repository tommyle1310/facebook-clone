import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../Avatar'
import useFetchFriendsData from '../../hooks/useFetchFriendsData';
import { fetchFriendRequests, toggleAddFriend } from '../../app/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../app/features/authSlice';
import useUserData from '../../hooks/useUserData';

const SubbarRight = () => {
    const dispatch = useDispatch()
    const [user] = useUserData()
    const [requestUser, setRequestUser] = useState({})
    const [friendRequests, friendRequestsLoading, refetchRequestFriendsData] = useFetchFriendsData(user?.id, fetchFriendRequests);
    useEffect(() => {
        setRequestUser(friendRequests[0])
    }, [friendRequests])

    const handleToggleAddFriend = async ({ userId, friendId }) => {
        await dispatch(toggleAddFriend({ userId, friendId }));
        // Refetch non-friends data after toggling friend status
        refetchRequestFriendsData();
    };
    return (
        <div className="flex-1 z-10">
            <div className="max-w-[28rem] fixed ml-10 min-h-screen p-3 top-16 flex flex-col gap-3 ">
                <div className="overflow-y-auto">

                    {/* sponsored */}
                    <div className="text-lg font-semibold">Sponsored</div>
                    <div className="w-full flex items-center gap-5">
                        <div className="aspect-square bg-accent h-20 rounded-lg"></div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold block max-w-64">Lorem ipsum dolor sit amet, asojjjjjjj.</p>
                            <p className="">asdsad</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-5">
                        <div className="aspect-square bg-accent h-20 rounded-lg"></div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold block max-w-64">Lorem ipsum dolor sit amet, asojjjjjjj.</p>
                            <p className="">asdsad</p>
                        </div>
                    </div>
                    <div className="divider"></div>

                    {/* friend request */}
                    {requestUser &&
                        <div className="p-3 tw-fc gap-2">
                            <div className="flex tw-jb">
                                <h5 className="text-lg font-semibold">Friend requests</h5>
                                <Link to='/friends' className="text-info tw-hv hover:text-primary">See All</Link>
                            </div>
                            <div className="tw-jb gap-3">
                                <Avatar />
                                <div className="flex-1 tw-fc gap-1">
                                    <div className="tw-jb">
                                        <h5 className="font-semibold">{requestUser?.name}</h5>
                                        <h5 className="text-xs text-primary">12hrs</h5>
                                    </div>
                                    <div className="tw-jb gap-1">
                                        <button onClick={() => handleToggleAddFriend({ userId: user?.id, friendId: requestUser?.id })} className="btn w-1/2 btn-primary">Accept</button>
                                        <button className="btn w-1/2 btn-secondary">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="divider"></div>

                    {/* contacts */}
                    <div className="flex flex-col">
                        <div className="flex tw-jb">
                            <h5 className="text-lg font-semibold">Contacts</h5>
                            <div className="tw-ic gap-2">
                                <div className="tw-hv hover:text-primary tw-cc size-8 rounded-full hover:bg-base-300 cursor-pointer">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="tw-hv hover:text-primary tw-cc size-8 rounded-full hover:bg-base-300 cursor-pointer">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                        </div>
                        <div className="tw-fc">
                            <div className="flex gap-2 tw-ic tw-hv group hover:bg-base-300 cursor-pointer p-3 rounded-box">
                                <div className="avatar online group-hover:opacity-80">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h5 className="font-semibold group-hover:opacity-80 flex-1">Toommy</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubbarRight
