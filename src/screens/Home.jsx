import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

const Home = () => {
    return (
        <div className='pt-16  '>
            <div className="carousel join carousel-center w-full gap-3 bg-neutral rounded-box">
                <div className="carousel-item rounded-box overflow-hidden  bg-accent tw-hv cursor-pointer group hover:opacity-80 w-32  ">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="group-hover:scale-110 " />
                </div>
                <div className="carousel-item rounded-box overflow-hidden bg-accent tw-hv cursor-pointer group hover:opacity-80 w-32 ">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="group-hover:scale-110 " />
                </div>
            </div>

            <div className=" p-5 flex flex-col bg-base-300 my-5 rounded-lg">
                <div className="flex items-center gap-5 w-full ">
                    <Link to='/profile/sadsa' className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </Link>
                    <input type="text" placeholder="Share something..." className="input input-bordered input-primary w-full" />
                </div>
                <div className="divider"></div>
                <div className="join w-full mx-auto ">
                    <button className='btn w-1/3 btn-ghost'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Livestream
                    </button>
                    <button className='btn w-1/3 btn-ghost'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        Images/Videos
                    </button>
                    <button className='btn w-1/3 btn-ghost'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>

                        Emotes
                    </button>
                </div>
            </div>

            <Post />

        </div>
    )
}

export default Home
