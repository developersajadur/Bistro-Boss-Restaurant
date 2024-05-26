import { FaBook, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { TbBasketStar, TbShoppingCartCheck } from "react-icons/tb";
import { TfiMenu, TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const UserDashboardMenus = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="bg-[#D1A054] px-4 py-6 ">
            <h1 className="text-2xl font-bold">
            BISTRO BOSS <br />RESTAURANT
            </h1>

            <ul className="flex flex-col gap-4 mt-10 uppercase">
            {
                isAdmin ? <>
                    <li><NavLink to="/dashboard/add-item" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaHome className="text-xl" /> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/add-item" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaUtensils className="text-xl" /> add items</NavLink></li>
                <li><NavLink to="/dashboard/manage-item" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><TfiMenuAlt className="text-xl" /> manage items</NavLink></li>
                <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaBook className="text-xl" />Manage bookings</NavLink></li>
                <li><NavLink to="/dashboard/all-users" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaUsers className="text-xl" />all users</NavLink></li>
                </>
                :
                <>
                    <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaHome className="text-xl" /> User Home</NavLink></li>
                <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaCalendarAlt className="text-xl" /> reservation</NavLink></li>
                <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><MdOutlinePayment  className="text-xl" /> payment history</NavLink></li>
                <li><NavLink to="/dashboard/my-card" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaShoppingCart className="text-xl" /> my cart</NavLink></li>
                <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><TbBasketStar className="text-xl" />add review</NavLink></li>
                <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><TbShoppingCartCheck className="text-xl" />my booking</NavLink></li>
                </>
            }
            </ul>
            <div className="h-[1px] bg-white my-8"></div>

            <ul className="flex flex-col gap-4 mt-10 uppercase">
                <li><NavLink to="/" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaHome className="text-xl" /> Home</NavLink></li>
                <li><NavLink to="/menu" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><TfiMenu className="text-xl" /> Menu</NavLink></li>
                <li><NavLink to="/shop" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><FaShoppingBag  className="text-xl" />shop</NavLink></li>
                <li><NavLink to="" className="flex gap-2 items-center text-lg font-medium text-[#151515]"><IoMdMail  className="text-xl" />contact</NavLink></li>
            </ul>

        </div>
    );
};

export default UserDashboardMenus;