import React from 'react'
import { Link } from 'react-router-dom'

const FriendSuggestion = () => {
    return (
        <div className=" p-5 tw-fc gap-3 w-full bg-base-300 rounded-box">
            <h5 className='text-lg font-bold'>People you may know</h5>
            <div className="carousel carousel-center w-full mx-auto pb-8 p-4 space-x-4 rounded-box">
                <Link to='/profile/:id' className="carousel-item w-28 relative tw-hv hover:opacity-90 cursor-pointer">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-btn" />
                    <p className='absolute -bottom-7 left-2 text-lg font-semibold'>hell</p>
                </Link>
            </div>

        </div>
    )
}

export default FriendSuggestion