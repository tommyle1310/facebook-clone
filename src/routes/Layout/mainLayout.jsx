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
        // Log the pathname for debugging purposes
        console.log("Current pathname:", pathname);

        if (pathname === '/') {
            setIsShowSidebar(true);
            setIsShowSidebarRight(true);
            setTypePage('Home');
        }
        else if (pathname.startsWith('/groups')) {
            setIsShowSidebar(true);
            setIsShowSidebarRight(false);
            setTypePage('Groups');
        }
        else {
            setIsShowSidebar(false);
            setIsShowSidebarRight(false);
            setTypePage('Home');
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
