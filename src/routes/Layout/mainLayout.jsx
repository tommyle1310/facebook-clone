import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat";
import Nav from "../../components/Nav";
import SubbarRight from "../../components/Sidebar/SubbarRight";
import { useEffect, useState } from "react";


export default function MainLayout() {
    const { pathname } = useLocation()

    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [isShowSidebarRight, setIsShowSidebarRight] = useState(false)
    const [typePage, setTypePage] = useState('Home')

    useEffect(() => {
        switch (true) {
            case pathname === '/':
                setIsShowSidebar(true);
                setIsShowSidebarRight(true);
                setTypePage('Home');
                break;
            case pathname.startsWith('/groups/create'):
                setIsShowSidebar(true);
                setIsShowSidebarRight(false);
                setTypePage('GroupCreate');
                break
            case pathname.startsWith('/groups/discover'):
            case pathname.startsWith('/groups/feed'):
            case pathname.startsWith('/groups/joined-groups'):
                setIsShowSidebar(true);
                setIsShowSidebarRight(false);
                setTypePage('Groups');
                break;
            case /^\/groups\/[^/]+$/.test(pathname):
                setIsShowSidebar(true);
                setIsShowSidebarRight(false);
                setTypePage('GroupWithId');
                break;
            case pathname.startsWith('/groups'):
                setIsShowSidebar(true);
                setIsShowSidebarRight(false);
                setTypePage('Groups');
                break;
            case pathname.startsWith('/watch'):
                setIsShowSidebar(true);
                setIsShowSidebarRight(false);
                setTypePage('Watch');
                break;
            default:
                setIsShowSidebar(false);
                setIsShowSidebarRight(false);
                setTypePage('Home');
                break;
        }
    }, [pathname]);



    return (
        <>
            <div className="min-h-screen  ">
                {/* nav */}
                <Nav />
                <div className="flex relative">

                    {/* side bar */}
                    {isShowSidebar &&

                        <div className="w-80 max-lg:hidden">
                            <Sidebar typePage={typePage} />
                        </div>
                    }

                    {/* chat */}
                    <Chat />
                    <div className="p-5  min-h-screen flex-1 flex">
                        {/* main content */}
                        <div className={`w-full  ${isShowSidebarRight && 'md:max-w-2xl'}`}>
                            <Outlet />
                        </div>

                        {/* subsidebarRight */}
                        {isShowSidebarRight &&

                            <div className="max-lg:hidden">

                                <SubbarRight />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
