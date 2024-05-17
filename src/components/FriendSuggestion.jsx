import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchFriends, fetchNonFriends, selectUser } from '../app/features/userSlice';
import { selectAuth } from '../app/features/authSlice';

const FriendSuggestion = () => {
    const [listUsers, setListUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch();
    const { id } = useSelector(selectAuth);
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {

            // Simulate a 3-second delay
            await new Promise(resolve => setTimeout(resolve, 3000));

            const data = await dispatch(fetchNonFriends(id)); // Pass the userId if needed
            if (data.type === "user/fetchNonFriends/fulfilled") {
                setIsLoading(false)
                setListUsers(data.payload);
            }
        };

        fetchData();
    }, [dispatch, id]);
    return (
        <div className=" p-5 tw-fc gap-3 w-full bg-base-300 rounded-box">
            <h5 className='text-lg font-bold max-md:text-sm'>People you may know</h5>
            {isLoading ? (
                // Render loading spinner while data is being fetched
                <div className="w-full h-24 tw-cc"><span className="pt-20  mx-auto loading loading-spinner text-success"></span></div>
            ) : (
                // Render your component using friends and nonFriends data
                <div>
                    {/* Render your component using friends and nonFriends data */}
                    <div className="carousel carousel-center w-full mx-auto pb-8 p-4 space-x-4 rounded-box">
                        {listUsers?.map((item) => (
                            <Link key={item.id} to={`/profile/${item.id}`} className="carousel-item w-28 max-md:w-20 relative tw-hv hover:opacity-90 cursor-pointer">
                                <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-btn" />
                                <p className='absolute -bottom-7 left-2 text-lg font-semibold max-md:text-sm'>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}


        </div>
    )
}

export default FriendSuggestion
