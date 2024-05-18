import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchFriends, fetchNonFriends, selectUser, toggleAddFriend } from '../app/features/userSlice';
import { selectAuth } from '../app/features/authSlice';
import useUserData from '../hooks/useUserData';
import useFetchFriendsData from '../hooks/useFetchFriendsData';

const FriendSuggestion = () => {
    const dispatch = useDispatch()

    const [user] = useUserData()
    const [nonFriendsData, nonFriendsLoading, refetchNonFriendsData] = useFetchFriendsData(user?.id, fetchNonFriends);
    const handleToggleAddFriend = async ({ userId, friendId }) => {
        await dispatch(toggleAddFriend({ userId, friendId }));
        // Refetch non-friends data after toggling friend status
        refetchNonFriendsData();
    };

    return (
        <div className=" p-5 tw-fc gap-3 w-full bg-base-300 rounded-box">
            <h5 className='text-lg font-bold max-md:text-sm'>People you may know</h5>
            {nonFriendsLoading ? (
                // Render loading spinner while data is being fetched
                <div className="w-full h-24 tw-cc"><span className="pt-20  mx-auto loading loading-spinner text-success"></span></div>
            ) : (
                // Render your component using friends and nonFriends data
                <div>
                    {/* Render your component using friends and nonFriends data */}
                    <div className="carousel carousel-center w-full mx-auto pb-8 p-4 space-x-4 rounded-box">
                        {nonFriendsData?.map((item) => (
                            <div
                                key={item.id}
                                className="carousel-item w-48 h-72 p-3 shadow-sm shadow-secondary rounded-md max-md:w-20 relative tw-hv bg-base-200 hover:opacity-90 cursor-pointer"
                            >
                                <Link
                                    to={`/profile/${item.id}`}
                                    style={{ backgroundImage: `url("https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg")` }}
                                    className="rounded-md w-full mx-auto bg-cover bg-no-repeat bg-center relative h-[50%]"
                                    alt="User Profile"
                                >
                                    <div className="relative  h-full">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevents the default Link behavior
                                                e.stopPropagation(); // Prevents event bubbling to the Link component
                                                handleToggleAddFriend({ userId: user?.id, friendId: item.id })
                                            }}
                                            className='absolute -bottom-16 w-full max-md:w-auto btn btn-primary'
                                        >
                                            Add
                                        </button>
                                        <p className='-bottom-32 left-3 absolute text-lg font-semibold max-md:text-sm'>{item.name}</p>
                                    </div>
                                </Link>

                                {/* Adjusted button width */}
                            </div>

                        ))}
                    </div>
                </div>
            )}


        </div>
    )
}

export default FriendSuggestion
