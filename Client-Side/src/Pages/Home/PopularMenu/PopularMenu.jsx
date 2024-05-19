import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menus] = useMenu();
    const popularItems = menus.filter(menu => menu.category === "popular" );

    return (
        <div className="mb-32 ">
             <section>
                    <SectionTitle
                    subHeading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                    ></SectionTitle>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    popularItems.map(menu => <MenuItem
                    key={menu._id}
                    menu={menu}
                    ></MenuItem> )
                }
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                <button className="btn btn-outline w-fit h-fit border-0 mt-10 border-b-4 rounded-lg ">View Full  Menu</button>
                </div>
                
        </div>
    );
};

export default PopularMenu;