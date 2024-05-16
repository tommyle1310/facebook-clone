import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import IntroSection from '../components/IntroSection';
import CreateSection from '../components/CreateSection';
import FriendSuggestion from '../components/FriendSuggestion';
import PageNav from '../components/PageNav';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulating a 3-second loading time

        return () => clearTimeout(timeout);
    }, []);


    if (isLoading) return <div className="w-full min-h-screen tw-cc"><span className="pt-20  mx-auto loading loading-spinner text-success"></span></div>
    return (
        <div className='pt-10 w-full  '>
            <div className="tw-fc  w-full  min-h-screen">
                <IntroSection isProfilePage data={{ name: 'Tommy Le', friends: 2 }} />
                <div className="min-h-screen w-full mt-24 max-md:mt-60">
                    <PageNav />
                    <div className="divider"></div>
                    <div className="md:flex gap-5">
                        <div className=" tw-fc gap-5  sticky basis-5/12">
                            <div className="bg-base-300 tw-fc p-3 gap-2 rounded-box overflow-hidden">
                                <h5 className='text-lg font-bold'>Description</h5>
                                <button className='btn w-full hover:opacity-80'>Add Description</button>
                                <div className="tw-ic gap-1"><i className="fa-solid fa-house-chimney"></i>Live in Saigon</div>
                                <div className="tw-ic gap-1"><i className="fa-solid fa-location-dot"></i>Live in Saigon</div>
                                <button className='btn w-full hover:opacity-80'>Edit my posts</button>
                                <div className="w-36 max-md:w-24 rounded-box h-56 max-md:h-36 overflow-hidden group tw-hv hover:opacity-80 cursor-pointer">
                                    <img className='object-cover group-hover:scale-105 tw-hv w-full h-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <button className='btn w-full hover:opacity-80'>Edit Featured</button>

                            </div>
                            <div className="bg-base-300 tw-fc p-3 gap-2 rounded-box overflow-hidden">
                                <div className="tw-jb">
                                    <h5 className='text-lg font-bold'>Uploads</h5>
                                    <h5 className=' text-info font-semibold'>See All</h5>
                                </div>
                                <div className="grid grid-cols-3 gap-1 rounded-box overflow-hidden">
                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                    <div className="bg-base-100 p-4 aspect-square"></div>

                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                    <div className="bg-base-100 p-4 aspect-square"></div>

                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                    <div className="bg-base-100 p-4 aspect-square"></div>
                                </div>
                            </div>
                            <div className="bg-base-300 tw-fc p-3 gap-2 rounded-box overflow-hidden">
                                <div className="tw-jb">
                                    <h5 className='text-lg font-bold'>Friends</h5>
                                    <h5 className=' text-info font-semibold'>See All</h5>
                                </div>
                                <h5 className='text-lg'>13180 friends</h5>
                                <div className="grid grid-cols-3 gap-1 ">
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>

                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>

                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                    <div className="bg-base-100 mb-10 p-4 aspect-square rounded-btn relative">
                                        <p className='absolute -bottom-6 left-2 font-semibold'>aso</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="gap-3 tw-fc basis-7/12">
                            <CreateSection />
                            <div className="max-w-[38rem]">

                                <FriendSuggestion />
                            </div>
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
