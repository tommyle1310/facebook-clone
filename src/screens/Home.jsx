import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import FriendSuggestion from '../components/FriendSuggestion'
import CreateSection from '../components/CreateSection'

const Home = () => {
    return (
        <div className='pt-20 tw-fc gap-3 w-full md:max-w-2xl'>
            <div className="carousel join carousel-center w-full gap-3 bg-base-300 rounded-box">
                <div className="carousel-item rounded-box overflow-hidden  bg-accent tw-hv cursor-pointer tw-hv group hover:opacity-80 w-32 max-md:w-24  ">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="tw-hv group-hover:scale-110 " />
                </div>
                <div className="carousel-item rounded-box overflow-hidden bg-accent tw-hv cursor-pointer tw-hv group hover:opacity-80 w-32 max-md:w-24 ">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="tw-hv group-hover:scale-110 " />
                </div>
            </div>

            <CreateSection />

            <Post />
            <FriendSuggestion />
        </div>
    )
}

export default Home
