import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch("jsons/menu.json")
        .then(res => res.json())
        .then(data =>
            {
                const popularItems = data.filter(menu => menu.category === "popular" );
                setMenus(popularItems)
            })
            //  setMenus(data))
    },[])
    return (
        <div className="mb-32">
             <section>
                    <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                    ></SectionTitle>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    menus.map(menu => <MenuItem
                    key={menu._id}
                    menu={menu}
                    ></MenuItem> )
                }
                </div>
        </div>
    );
};

export default PopularMenu;