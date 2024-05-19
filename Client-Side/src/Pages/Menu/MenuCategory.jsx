import { NavLink } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ menus, menuImg, title }) => {
    return (
        <div className="mt-20 mb-20">
            { title && <Cover 
            img={menuImg}
            title={title}
            >

            </Cover>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
                {menus.map((menu) => (
                    <MenuItem
                        key={menu._id}
                        menu={menu}
                    />
                ))}
            </div>
          <NavLink to={`/orders`}>
          <div className="flex w-full flex-col justify-center items-center">
                <button className="btn btn-outline w-fit h-fit border-0 mt-10 border-b-4 rounded-lg ">ORDER YOUR FAVORITE FOOD</button>
                </div>
          </NavLink>
        </div>
    );
};

export default MenuCategory;
