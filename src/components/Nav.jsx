import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import { useLocation } from 'react-router-dom'
import IntroSidebarSection from '../components/Sidebar/IntroSidebarSection'
import Avatar from './Avatar'
import { useDispatch } from 'react-redux';
import useUserData from '../hooks/useUserData'
import { signout } from '../app/features/authSlice'
import useFetchNotifications from '../hooks/useFetchNotifications'
import { accpetFriendRequest, toggleAddFriend } from '../app/features/userSlice'


const Nav = () => {
    const [notifications, isLoadingNotifications, refetchNotifications] = useFetchNotifications();
    const [notificationTab, setNotificationTab] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();

    const handleStyleActiveTabLink = (type) => {
        return type === '/' && pathname === '/' || type !== '/' && pathname.startsWith(type)
            ? "btn bg-primary join-item hover:bg-secondary"
            : "btn hover:bg-primary join-item";
    };

    // console.log(notifications);

    const handleToggleAddFriend = async ({ userId, friendId }) => {
        const response = await dispatch(accpetFriendRequest({ userId, friendId }))
        console.log(response.data);
        // Refetch non-friends data after toggling friend status
        refetchNotifications();
    };

    const [user] = useUserData()

    return (
        <>
            {/* desktop */}
            <div className="navbar z-20 fixed top-0 mx-auto px-16 bg-base-300 max-md:hidden">
                <div className="navbar-start gap-3">
                    <Link to='/' className='tw-cc size-11 '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={'oklch(var(--p))'}><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                    </Link>
                    <button className='tw-cc size-12 btn btn-neutral btn-circle'>
                        <i className="fa-solid fa-magnifying-glass"></i> </button>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto md:hidden lg:block" />
                    </div>
                </div>
                <div className="navbar-center join">
                    <Link to='/' className={handleStyleActiveTabLink('/')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={'oklch(var(--bc))'} className="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                    </Link>
                    <Link to='/watch' className={handleStyleActiveTabLink('/watch')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={'oklch(var(--bc))'} className="size-6">
                        <path d="M19.5 6h-15v9h15V6Z" />
                        <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z" clipRule="evenodd" />
                    </svg>
                    </Link>
                    <Link to='/shop' className={handleStyleActiveTabLink('/shop')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={'oklch(var(--bc))'} className="size-6">
                        <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                        <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                    </svg>
                    </Link>
                    <Link to='/groups' className={handleStyleActiveTabLink('/groups')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={'oklch(var(--bc))'} className="size-6">
                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                    </svg>
                    </Link>
                    <Link to='/more' className={handleStyleActiveTabLink('/more')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>

                    </Link>
                </div>
                <div className="navbar-end">

                    {/* chat */}
                    <button tabIndex={0} role='button' className="btn btn-ghost btn-circle text-lg dropdown">
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow rounded-box w-52 right-48">
                            <div className="tw-fc gap-3 items-start p-5 overflow-y-auto bg-base-100 min-h-screen w-[30rem]">
                                <h3 className='text-xl font-bold'>Chats</h3>
                                <div className="w-full h-10 ">
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                    </label>
                                </div>
                                <div className="w-full mt-5 h-5 tw-fc">
                                    <div className="rounded-btn tw-hv hover:bg-neutral p-3 tw-ic gap-3">
                                        <div className="avatar online">
                                            <div className="w-12 rounded-full">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className="tw-fc items-start">
                                            <h5 className='text-lg font-bold'>SaNguyen</h5>
                                            <h5 className='tw-ic gap-2'>You: I'm afraid the device getting to hot<span className='text-xs'>24 min</span></h5>
                                        </div>
                                    </div>
                                    <div className="rounded-btn tw-hv hover:bg-neutral p-3 tw-ic gap-3">
                                        <Avatar size={12} />
                                        <div className="tw-fc items-start">
                                            <h5 className='text-lg font-bold'>SaNguyen</h5>
                                            <h5 className='tw-ic gap-2'>You: I'm afraid the device getting to hot<span className='text-xs'>24 min</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </button>

                    {/* notifications */}
                    <button tabIndex={0} role="button" className="btn btn-ghost btn-circle text-lg dropdown">
                        <i className="fa-solid fa-bell"></i>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow rounded-box w-52 right-56">
                            <div className="tw-fc gap-3 items-start p-5 overflow-y-auto bg-base-100 min-h-screen w-[30rem]">
                                <h3 className="text-xl font-bold">Notifications</h3>
                                <div role="tablist" className="tabs tabs-boxed bg-base-200">
                                    <a onClick={() => { setNotificationTab(0) }} role="tab" className={`tab ${notificationTab === 0 && 'tab-active'}`}>All</a>
                                    <a onClick={() => { setNotificationTab(1) }} role="tab" className={`tab ${notificationTab === 1 && 'tab-active'}`}>Unread</a>
                                </div>
                                <div className="w-full tw-fc gap-3">
                                    {isLoadingNotifications ?
                                        <div className="w-full min-h-screen tw-cc"><span className="pt-20  mx-auto loading loading-spinner text-success"></span></div>
                                        :
                                        <div className='w-full tw-fc'>
                                            <div className="p-3 tw-fc gap-2">
                                                <div className="flex tw-jb">
                                                    <h5 className="text-lg font-semibold">Friend requests</h5>
                                                    <Link to='/friends' className="text-info tw-hv hover:text-primary">See All</Link>
                                                </div>
                                                {
                                                    notificationTab === 0 ?
                                                        notifications?.map((item) => (
                                                            <div key={item.id} className="tw-jb gap-3">
                                                                <Avatar image={item.avatar} />
                                                                {
                                                                    item.type === "FRIEND_REQUEST" &&
                                                                    <div className="flex-1 tw-fc gap-1 ">
                                                                        <div className="flex flex-col items-start ">
                                                                            <h5 className="font-semibold ">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                        <div className="tw-jb gap-1">
                                                                            <a onClick={() => handleToggleAddFriend({ userId: user?.id, friendId: item?.fromId })} className="btn w-1/2 btn-primary">Accept</a>
                                                                            <a className="btn w-1/2 btn-secondary">Remove</a>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.type === "FRIEND_ACCEPT" &&
                                                                    <div className="flex-1 tw-fc gap-1 ">
                                                                        <div className="flex flex-col items-start ">
                                                                            <h5 className="font-semibold ">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.type === "POST_LIKE" &&
                                                                    <div className="flex-1 tw-fc gap-1 ">
                                                                        <div className="flex flex-col items-start ">
                                                                            <h5 className="font-semibold ">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.type === "POST_COMMENT" &&
                                                                    <div className="flex-1 tw-fc gap-1 ">
                                                                        <div className="flex flex-col items-start ">
                                                                            <h5 className="font-semibold ">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                <div className="w-5 tw-cc">
                                                                    <i className="fa-solid text-primary fa-circle"></i>
                                                                </div>
                                                            </div>
                                                        ))
                                                        :
                                                        notifications?.filter(item => item.read === false)?.map((item) => (
                                                            <div key={item.id} className="tw-jb gap-3">
                                                                <Avatar image={item.avatar} />
                                                                {
                                                                    item.type === "FRIEND_REQUEST" &&
                                                                    <div className="flex-1 tw-fc gap-1">
                                                                        <div className="tw-jb">
                                                                            <h5 className="font-semibold">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                        <div className="tw-jb gap-1">
                                                                            <div onClick={() => handleToggleAddFriend({ userId: user?.id, friendId: item?.fromId })} className="btn w-1/2 btn-primary">Accept</div>
                                                                            <div className="btn w-1/2 btn-secondary">Remove</div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.type === "FRIEND_ACCEPT" &&
                                                                    <div className="flex-1 tw-fc gap-1 ">
                                                                        <div className="tw-jb ">
                                                                            <h5 className="font-semibold ">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {
                                                                    item.type === "POST_LIKE" &&
                                                                    <div className="flex-1 tw-fc gap-1 ">
                                                                        <div className="tw-jb ">
                                                                            <h5 className="font-semibold ">{item.message}</h5>
                                                                            <h5 className="text-xs text-primary">{item.timestamp}</h5>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                <div className="w-5 tw-cc">
                                                                    <i className="fa-solid text-primary fa-circle"></i>
                                                                </div>
                                                            </div>
                                                        ))
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </ul>
                    </button>

                    {/* setting */}
                    <div className="dropdown">
                        <div tabIndex={0} role='button' className="w-10 aspect-square overflow-hidden rounded-full">
                            <img alt={user?.name} src={user?.image} className='w-full h-full' />

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-primary shadow-sm bg-base-100 rounded-box w-52 right-0">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                            <li tabIndex={0} className="collapse p-0 border border-base-300 bg-base-200">
                                <div className=" ">
                                    Change theme
                                </div>
                                <div className="collapse-content flex flex-col p-0">
                                    {/* <div onClick={() => toggleTheme('light')} className="tw-hv hover:bg-base-200 w-full text-center py-2">light</div> */}
                                    <div onClick={() => toggleTheme('lemonade')} className="tw-hv hover:bg-base-200 w-full text-center py-2">Lemonade</div>
                                    <div onClick={() => toggleTheme('cmyk')} className="tw-hv hover:bg-base-200 w-full text-center py-2">Cmyk</div>
                                    <div onClick={() => toggleTheme('dark')} className="tw-hv hover:bg-base-200 w-full text-center py-2">Dark</div>
                                    <div onClick={() => toggleTheme('night')} className="tw-hv hover:bg-base-200 w-full text-center py-2">Night</div>
                                    <div onClick={() => toggleTheme('forest')} className="tw-hv hover:bg-base-200 w-full text-center py-2">Forest</div>
                                    <div onClick={() => toggleTheme('synthwave')} className="tw-hv hover:bg-base-200 w-full text-center py-2">Synthwave</div>
                                </div>
                            </li>
                            <li className=" btn-error btn-outline p-0 rounded-md"><div onClick={() => { dispatch(signout(navigate)) }}>Log Out</div></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="tw-jb px-5 p-5 -mb-16 md:hidden w-full gap-5 fixed top-0 z-20 bg-base-300">
                <div className="drawer z-30">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content  h-full">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=" drawer-button btn btn-circle btn-neutral"><i className="fa-solid fa-bars"></i></label>
                    </div>
                    <div className="drawer-side h-full">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 min-h-full bg-base-200 text-base-content w-10/12">
                            {/* Sidebar content here */}
                            <IntroSidebarSection navData={[
                                { url: '/', name: 'Home', icon: <i className="fa-solid text-primary fa-house"></i> },
                                { url: '/profile/:id', name: 'My Profile', icon: <i className="fa-solid text-secondary fa-user"></i> },
                                { url: '/groups', name: 'Groups', icon: <i className="fa-solid text-warning fa-people-group"></i> },
                                { url: '/watch', name: 'Watch', icon: <i className="fa-solid text-info fa-tv"></i> },
                                { url: '/login', name: 'Log Out', icon: <i className="fa-solid text-error fa-arrow-right-from-bracket"></i>, textColor: 'text-error' },
                            ]} />
                        </ul>
                    </div>
                </div>
                <div className="form-control ">
                    <input type="text" placeholder="Search" className="input input-bordered max-w-lg max-md:max-w-[9rem]" />
                </div>
                <button className="btn btn-circle btn-neutral"><i className="fa-brands text-xs fa-facebook-messenger"></i></button>
            </div>

        </>
    )
}

export default Nav
