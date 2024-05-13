import { Link, Outlet } from "react-router-dom";


export default function AuthLayout() {
    return (
        <>
            <div className="min-h-screen ">
                <div className="max-w-screen-xl mx-auto object-center align-middle pt-20 ">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
