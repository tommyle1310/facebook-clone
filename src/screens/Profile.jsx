import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulating a 3-second loading time

        return () => clearTimeout(timeout);
    }, []);


    if (isLoading) return <div className="w-full min-h-screen tw-cc"><span className="pt-20  mx-auto loading loading-spinner text-success"></span></div>
    return (
        <div className='pt-10 max-w-screen-lg mx-auto'>
            <div className="tw-fc  w-full min-h-screen">
                <div className="h-80 w-full bg-accent rounded-b-xl relative">
                    <div className="absolute -bottom-20 border-base-100 left-10 size-40 overflow-hidden rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <div className="absolute w-[48rem] -bottom-16 left-56  tw-jb gap-5">
                        <div className="tw-ic gap-5" >
                            <div className="tw-fc">
                                <p className='text-xl font-bold'>ainfaf</p>
                                <p className='text-lg font-semibold'>ainfaf</p>
                            </div>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tw-ic gap-2">
                            <button className='btn btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Create a story</button>
                            <button className='btn btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Edit my profile</button>
                        </div>

                    </div>
                </div>
                <div className="min-h-screen w-full mt-24">
                    <div className="tw-jb">
                        <div role="tablist" className="tabs tabs-boxed ">
                            <a role="tab" className="tab tw-hv hover:bg-base-300 tab-active">Posts</a>
                            <a role="tab" className="tab tw-hv hover:bg-base-300 ">Description</a>
                            <a role="tab" className="tab tw-hv hover:bg-base-300">Friends</a>
                            <a role="tab" className="tab tw-hv hover:bg-base-300">Images Uploaded</a>
                            <a role="tab" className="tab tw-hv hover:bg-base-300">Videos Uploaded</a>
                            <div role="tab" className="tab tw-hv hover:bg-base-300 tw-ic gap-2 dropdown">
                                <div tabIndex={0} role="button" className=" m-1"> More <i className="fa-solid fa-chevron-down text-xs"></i></div>
                                <ul tabIndex={0} className="dropdown-content -bottom-24 left-1 menu shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                        <button className='btn btn-ghost btn-circle'>
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                    </div>
                    <div className="divider"></div>
                    <div className="flex gap-5">
                        <div className=" tw-fc gap-5  sticky basis-5/12">
                            <div className="bg-base-300 tw-fc p-3 gap-2 rounded-box overflow-hidden">
                                <h5 className='text-lg font-bold'>Description</h5>
                                <button className='btn w-full hover:opacity-80'>Add Description</button>
                                <div className="tw-ic gap-1"><i className="fa-solid fa-house-chimney"></i>Live in Saigon</div>
                                <div className="tw-ic gap-1"><i className="fa-solid fa-location-dot"></i>Live in Saigon</div>
                                <button className='btn w-full hover:opacity-80'>Edit my posts</button>
                                <div className="w-36 rounded-box h-56 overflow-hidden group tw-hv hover:opacity-80 cursor-pointer">
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
                        <div className="gap-3  tw-fc basis-7/12">
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
