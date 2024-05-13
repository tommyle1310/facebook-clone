import { Link, Outlet } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat";
import Nav from "../../components/Nav";
import SubbarRight from "../../components/Sidebar/SubbarRight";


export default function MainLayout() {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <div className="min-h-screen  ">
                {/* nav */}
                <Nav />
                <div className="flex relative">

                    {/* side bar */}
                    <div className="w-80 max-lg:hidden">
                        <Sidebar />
                    </div>

                    {/* chat */}
                    <Chat />
                    <div className="p-5  min-h-screen flex-1 flex">
                        {/* main content */}
                        <div className="w-full md:max-w-2xl tw-cc">
                            <div className="pt-16 text-error text-3xl font-bold">Dang ~ This is a not found page</div>
                        </div>

                        {/* subsidebarRight */}
                        <div className="max-lg:hidden">

                            <SubbarRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
