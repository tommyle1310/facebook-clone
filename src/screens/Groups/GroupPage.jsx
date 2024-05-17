import React from 'react'
import IntroSection from '../../components/IntroSection'
import Post from '../../components/Post'
import CreateSection from '../../components/CreateSection'
import { Link, useLocation, useParams } from 'react-router-dom'
import GroupCardItem from '../../components/GroupCardItem'
import PageNav from '../../components/PageNav'

const GroupPage = () => {
    const { type } = useParams();

    const renderHomeGroup = () => (
        <div className='mt-20 grid p-10 grid-cols-2 grid-rows-2 gap-3 w-full h-96 max-md:h-48 tw-r-fc'>
            <Link to='/groups/create' className="rounded-box shadow-lg btn h-full btn-info text-lg tw-hv max-md:text-md"><i className="fa-solid fa-plus"></i>Create Group</Link>
            <Link to='/groups/discover' className="rounded-box shadow-lg btn h-full btn-warning text-lg tw-hv max-md:text-md"><i className="fa-solid fa-compass"></i>Discover</Link>
            <Link to='/groups/feed' className="rounded-box shadow-lg btn h-full btn-primary text-lg tw-hv max-md:text-md"><i className="fa-solid fa-newspaper"></i>Your Feed</Link>
            <Link to='/groups/joined-groups' className="rounded-box shadow-lg btn h-full btn-success text-lg tw-hv max-md:text-md"><i className="fa-solid fa-people-group"></i>Your Groups</Link>
        </div>
    )
    const renderFeed = () => (
        <div className='mt-10 max-md:mt-20 w-full  p-3 '>
            <div className="w-[30rem] max-md:w-full tw-fc  gap-3 mx-auto">
                <h4 className='text-lg font-semibold'>Recent Activities</h4>
                <div className="rounded-box p-3 tw-cc bg-neutral shadow-md gap-3 tw-fc">
                    <div className="stack">
                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded w-24 max-md:w-12" />
                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded w-24 max-md:w-12" />
                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded w-24 max-md:w-12" />
                    </div>
                    <h3 className='text-xl font-bold max-md:text-lg'>You're all caught up</h3>
                    <p className='max-md:text-sm'>Check back later for more updates</p>
                    <Link to='/groups/discover' className="btn btn-primary max-md:text-xs">Discover more groups</Link>
                </div>
            </div>
        </div>
    )
    const renderDiscover = () => (
        <div className='mt-20 tw-fc gap-3 w-full'>
            <div className="tw-jb">
                <div className="tw-fc">
                    <h4 className='text-xl font-bold'>Friend's groups</h4>
                    <p>Groups your friends are in.</p>
                </div>
                <p className=' text-info'>See All</p>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full tw-r-fc items-center">
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
            </div>
            <div className="divider"></div>
            <h4 className='text-xl font-bold'>More Suggestions</h4>
            <div className="grid grid-cols-3 gap-3 w-full tw-r-fc">
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
            </div>

        </div>

    )
    const renderJoinedGroups = () => (
        <div className='mt-20 tw-fc gap-3 w-full h-96'>
            <h4 className='text-xl font-bold'>All groups you've joined</h4>
            <div className="grid grid-cols-3 gap-3 w-full tw-r-fc">
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
                <GroupCardItem />
            </div>
        </div>

    )
    const renderCreatePage = () => (
        <div className="mt-10">
            <IntroSection data={{ title: 'Group Name', members: 1, }} disabled permissions={{ allowShare: true }} />
            <div className="divider mt-20"></div>
            <PageNav />
        </div>
    )

    const renderGroupPage = () => {
        switch (type) {
            // group home
            case undefined:
                return renderHomeGroup()
            case 'feed':
                return renderFeed()
            case 'discover':
                return renderDiscover()
            case 'joined-groups':
                return renderJoinedGroups()
            case 'create':
                return renderCreatePage()
            // each group
            case /^\/groups\/[^/]+$/.test(type):
                return (
                    <div className='pt-10 w-full min-h-screen '>
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
            default:
                return (
                    <div className='pt-10 w-full '>
                        <div className="  max-w-screen-lg mx-auto">
                            <IntroSection data={{ title: 'ReactJS Dummies', members: 21122 }} permissions={{ allowShare: true }} />
                            <div className="min-h-screen w-full mt-24">
                                <div className="divider max-md:mt-48"></div>

                                <PageNav />
                                <div className="divider"></div>
                                <div className="min-h-screen md:flex   gap-3">

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
                                    <div className="basis-7/12 tw-fc gap-3 mb-3">
                                        <CreateSection />

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
    }

    return (
        <>
            {renderGroupPage()}
        </>
    )
}

export default GroupPage
