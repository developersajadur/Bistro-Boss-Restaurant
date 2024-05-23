import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../Hooks/useCard";

const Header = () => {
    const { user, logOutUser } = useAuth();
    const [card] = useCard();
    const navLinks = (
        <>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="">CONTACT US</NavLink></li>
            <li><NavLink to="">DASHBOARD</NavLink></li>
            <li><NavLink to="/menu">OUR MENU</NavLink></li>
            <li><NavLink to="/shop">OUR SHOP</NavLink></li>
            <li><NavLink to="">ORDERS</NavLink></li>
            <li><Link to="/dashboard/my-card"> <div className="indicator">
            <FaShoppingCart className="bg-transparent text-2xl" />
          <span className="badge badge-sm indicator-item">{card?.length}</span>
        </div></Link></li>
        </>
    );

    return (
        <div className="">
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-10 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <button onClick={logOutUser} className="btn">Logout</button>
                    ) : (
                        <NavLink to="/login" className="btn">Login</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
