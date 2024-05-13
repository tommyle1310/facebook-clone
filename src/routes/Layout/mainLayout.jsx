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

    useEffect(() => {
        if (pathname === '/') {
            setIsShowSidebar(true)
            setIsShowSidebarRight(true)
        }
        else {
            setIsShowSidebar(false)
            setIsShowSidebarRight(false)
        }
    }, [pathname])

    return (
        <>
            <div className="min-h-screen  ">
                {/* nav */}
                <Nav />
                <div className="flex relative">

                    {/* side bar */}
                    {isShowSidebar &&

                        <div className="w-80 max-lg:hidden">
                            <Sidebar />
                        </div>
                    }

                    {/* chat */}
                    <Chat />
                    <div className="p-5  min-h-screen flex-1 flex">
                        {/* main content */}
                        <div className={`w-full  ${isShowSidebar && 'md:max-w-2xl'}`}>
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
