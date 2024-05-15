import React from 'react';
import { Link } from 'react-router-dom';
import IntroSidebarSection from './IntroSidebarSection';
import SidebarItemsWithAvatar from './SidebarItemsWithAvatar';

const Sidebar = ({ typePage }) => {
    const renderHomeLinks = () => (
        <>
            <Link to="/profile/:id" className="p-2 flex gap-3 items-center tw-hv hover:bg-base-300 rounded-lg">
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" />
                    </div>
                </div>
                Tommy
            </Link>
            <IntroSidebarSection
                navData={[
                    {
                        url: '/friends', name: 'Friends', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-success">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                        </svg>
                    },
                    {
                        url: '/memory', name: 'Memories', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-info">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    },
                    {
                        url: '/saved', name: 'Saved', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-error">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    },
                    {
                        url: '/groups', name: 'Groups', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-accent">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    },
                ]}
            />
            <div className="divider"></div>
            <h3 className="text-lg">My shortcut</h3>
            <SidebarItemsWithAvatar items={[
                { url: "/groups/MLBBVN", title: 'Mobile Legends: Bang Bang Vietnam', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/280392765_1399046063916323_6721271066693186838_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYxms486HmlveS3ZLDU48FzacYdGZuXunNpxh0Zm5e6XDPGQgb2_dYniXA84-hu9yp0lknrQQ58SY0NyCvRmpT&_nc_ohc=u-oQAlPBSK8Q7kNvgHkXs3T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYC_5hAtf9X7ixMobxObmthCG83eGjMgFb68_ZBsIiVRVA&oe=6644A8D0' },
                { url: "/groups/wildrift", title: 'Wild Rift', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/280392765_1399046063916323_6721271066693186838_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYxms486HmlveS3ZLDU48FzacYdGZuXunNpxh0Zm5e6XDPGQgb2_dYniXA84-hu9yp0lknrQQ58SY0NyCvRmpT&_nc_ohc=u-oQAlPBSK8Q7kNvgHkXs3T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYC_5hAtf9X7ixMobxObmthCG83eGjMgFb68_ZBsIiVRVA&oe=6644A8D0' },
                { url: "/profile/:id", title: 'Tommy Le', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/280392765_1399046063916323_6721271066693186838_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYxms486HmlveS3ZLDU48FzacYdGZuXunNpxh0Zm5e6XDPGQgb2_dYniXA84-hu9yp0lknrQQ58SY0NyCvRmpT&_nc_ohc=u-oQAlPBSK8Q7kNvgHkXs3T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYC_5hAtf9X7ixMobxObmthCG83eGjMgFb68_ZBsIiVRVA&oe=6644A8D0' }
            ]} />
        </>
    );

    const renderGroupWithIdLinks = () => (
        <div className="tw-jb gap-3">
            <div className="avatar">
                <div className="w-10 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="group" />
                </div>
            </div>
            <div className="tw-fc">
                <p className="block text-sm font-semibold">Mobile Legends: Bang Bang Funtap&Moonton Official</p>
                <div className="tw-ic text-xs">
                    Public group
                    ·
                    28.7K members
                </div>
            </div>
        </div>
    );

    const renderGroupsLinks = () => (
        <div className="tw-fc gap-3">
            <IntroSidebarSection title='Groups' navData={[
                { url: '/groups', name: 'Home', icon: <i className="fa-solid text-secondary fa-house"></i> },
                { url: '/groups/feed', name: 'Your Feed', icon: <i className="fa-regular text-info fa-newspaper"></i> },
                { url: '/groups/discover', name: 'Discover', icon: <i className="fa-solid  text-warning fa-compass"></i> },
                { url: '/groups/joined-groups', name: 'My Groups', icon: <i className="fa-solid text-primary fa-people-group"></i> },
            ]} />
            <div className="divider"></div>
            <div className="tw-jb">
                <h5 className='font-semibold text-xl'>Groups you've joined</h5>
                <p className=' text-info'>See All</p>
            </div>
            <div className="">
                <SidebarItemsWithAvatar items={[
                    { url: "/groups/MLBBVN", title: 'Mobile Legends: Bang Bang Vietnam', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/280392765_1399046063916323_6721271066693186838_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYxms486HmlveS3ZLDU48FzacYdGZuXunNpxh0Zm5e6XDPGQgb2_dYniXA84-hu9yp0lknrQQ58SY0NyCvRmpT&_nc_ohc=u-oQAlPBSK8Q7kNvgHkXs3T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYC_5hAtf9X7ixMobxObmthCG83eGjMgFb68_ZBsIiVRVA&oe=6644A8D0' },
                    { url: "/groups/wildrift", title: 'Wild Rift', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/280392765_1399046063916323_6721271066693186838_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYxms486HmlveS3ZLDU48FzacYdGZuXunNpxh0Zm5e6XDPGQgb2_dYniXA84-hu9yp0lknrQQ58SY0NyCvRmpT&_nc_ohc=u-oQAlPBSK8Q7kNvgHkXs3T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYC_5hAtf9X7ixMobxObmthCG83eGjMgFb68_ZBsIiVRVA&oe=6644A8D0' },
                    { url: "/profile/:id", title: 'Tommy Le', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/280392765_1399046063916323_6721271066693186838_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYxms486HmlveS3ZLDU48FzacYdGZuXunNpxh0Zm5e6XDPGQgb2_dYniXA84-hu9yp0lknrQQ58SY0NyCvRmpT&_nc_ohc=u-oQAlPBSK8Q7kNvgHkXs3T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYC_5hAtf9X7ixMobxObmthCG83eGjMgFb68_ZBsIiVRVA&oe=6644A8D0' }
                ]} />
            </div>
        </div>
    );

    const renderWatchLinks = () => (

        <IntroSidebarSection title='Videos' navData={[
            { url: '/watch', name: 'Home', icon: <i className="fa-solid text-info fa-house"></i> },
            { url: '/watch/live', name: 'Live', icon: <i className="fa-solid text-error fa-circle"></i> },
            { url: '/watch/reel', name: 'Reels', icon: <i className="fa-solid text-warning fa-clapperboard"></i> },
            { url: '/watch/explore', name: 'Explore', icon: <i className="fa-solid text-primary fa-rocket"></i> },
            { url: '/watch/saved', name: 'Saved Videos', icon: <i className="fa-solid text-success fa-bookmark"></i> },

        ]} />
    );

    const renderSidebarContent = () => {
        switch (typePage) {
            case 'Home':
                return renderHomeLinks();
            case 'Groups':
                return renderGroupsLinks();
            case 'GroupWithId':
                return renderGroupWithIdLinks();
            case 'Watch':
                return renderWatchLinks();
            // Add other cases as needed
            default:
                return null;
        }
    };

    return (
        <div className="fixed h-full w-80 top-16 flex flex-col p-5">
            {renderSidebarContent()}
        </div>
    );
};

export default Sidebar;
