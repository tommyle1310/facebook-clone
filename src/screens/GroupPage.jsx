import React from 'react'
import IntroSection from '../components/IntroSection'
import Post from '../components/Post'
import CreateSection from '../components/CreateSection'

const GroupPage = () => {
    return (
        <div className='pt-10 w-full '>
            <div className="  max-w-screen-lg mx-auto">
                <IntroSection data={{ title: 'ReactJS Dummies', members: 21122 }} permissions={{ allowShare: true }} />
                <div className="min-h-screen w-full mt-24">
                    <div className="divider"></div>
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
                    <div className="min-h-screen flex gap-3">
                        <div className="basis-7/12 tw-fc gap-3">
                            <CreateSection />

                            <Post />
                            <Post />
                            <Post />
                        </div>
                        <div className="basis-5/12 tw-fc gap-3">
                            <div className="bg-base-300 tw-fc p-3 gap-3 rounded-box overflow-hidden">
                                <div className="tw-jb">
                                    <h5 className='text-lg font-bold'>About</h5>
                                </div>
                                <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae tempore dolore temporibus? Saepe eveniet praesentium asperiores tempore adipisci, porro ipsa veritatis non nihil veniam blanditiis consectetur maiores. Nam, fuga corrupti!</div>
                                <div className="tw-ic gap-2">
                                    <i className="fa-solid fa-earth-asia"></i>
                                    <div className="tw-fc">
                                        <h5 className='font-bold'>Public</h5>
                                        <h5 className=''>Anyone can see who's in the group and what they post.</h5>
                                    </div>
                                </div>
                                <div className="tw-ic gap-2">
                                    <i className="fa-solid fa-eye"></i>
                                    <div className="tw-fc">
                                        <h5 className='font-bold'>Visible</h5>
                                        <h5 className=''>Anyone can find this group.</h5>
                                    </div>
                                </div>
                                <div className="tw-ic gap-2">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="tw-fc">
                                        <h5 className='font-bold'>Tan Phu, Vietnam</h5>
                                    </div>
                                </div>
                                <button className="btn btn-neutral">Learn more</button>
                            </div>
                            <div className="bg-base-300 tw-fc p-3 gap-3 rounded-box overflow-hidden">
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
                                <button className="btn btn-neutral">See All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupPage
