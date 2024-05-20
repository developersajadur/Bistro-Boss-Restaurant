import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
    return (
        <div className="flex w-full h-full">
            <div className="w-[25%] min-h-screen bg-[#D1A054]"></div>
            <div className="w-[75%] min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboardLayout;