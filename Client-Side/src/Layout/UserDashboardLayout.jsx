import { Outlet } from "react-router-dom";
import UserDashboardMenus from "../Pages/UserDashboard/UserDashboardMenus";

const UserDashboardLayout = () => {
    return (
        <div className="flex w-full h-full">
            <div className="w-[25%] min-h-screen bg-[#D1A054]">
                <UserDashboardMenus></UserDashboardMenus>
            </div>
            <div className="w-[75%] px-24 min-h-screen bg-white">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboardLayout;