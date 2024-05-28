import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat";
import Nav from "../../components/Nav/Nav";
import SubbarRight from "../../components/Sidebar/SubbarRight";
import { useEffect, useState } from "react";

// Helper function to determine the type of page
const getPageType = (pathname) => {
    // console.log(pathname);
    switch (true) {
        case pathname.startsWith('/profile'):
            return { showSidebar: false, showSidebarRight: false };
        case pathname.startsWith('/groups/create'):
            return { showSidebar: true, showSidebarRight: false, type: 'GroupCreate' };
        case pathname.startsWith('/groups/discover'):
        case pathname.startsWith('/groups/feed'):
        case pathname.startsWith('/groups/joined-groups'):
            return { showSidebar: true, showSidebarRight: false, type: 'Groups' };
        case /^\/groups\/[^/]+$/.test(pathname):
            return { showSidebar: true, showSidebarRight: false, type: 'GroupWithId' };
        case pathname.startsWith('/groups'):
            return { showSidebar: true, showSidebarRight: false, type: 'Groups' };

        case pathname.startsWith('/watch/live'):
        case pathname.startsWith('/watch/reel'):
        case pathname.startsWith('/watch/explore'):
        case pathname.startsWith('/watch/saved'):
            return { showSidebar: true, showSidebarRight: false, type: 'Watch' };
        case pathname.startsWith('/watch'):
            return { showSidebar: true, showSidebarRight: false, type: 'Watch' };

        case pathname === '/':
        default:
            return { showSidebar: true, showSidebarRight: true, type: 'Home' };
    }
};


export default function MainLayout() {
    const { pathname } = useLocation();
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [isShowSidebarRight, setIsShowSidebarRight] = useState(false);
    const [typePage, setTypePage] = useState('Home');

    useEffect(() => {
        const { showSidebar, showSidebarRight, type } = getPageType(pathname);
        setIsShowSidebar(showSidebar);
        setIsShowSidebarRight(showSidebarRight);
        setTypePage(type);
    }, [pathname]);

    return (
        <>
            <div className="min-h-screen w-full ">
                {/* nav */}
                <Nav />
                <div className="flex relative w-full ">
                    {/* side bar */}
                    {isShowSidebar &&
                        <div className="w-80 max-lg:hidden">
                            <Sidebar typePage={typePage} />
                        </div>
                    }

                    {/* chat */}
                    <Chat />
                    <div className="p-5  w-full min-h-screen flex-1 flex">
                        {/* main content */}
                        <div className={`w-full   ${isShowSidebarRight ? 'md:max-w-2xl' : 'mx-auto'}`}>
                            <Outlet />
                        </div>

                        {/* subsidebarRight */}
                        {isShowSidebarRight &&
                            <div className="max-xl:hidden">
                                <SubbarRight />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
