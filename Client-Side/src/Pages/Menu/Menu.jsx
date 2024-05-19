import Cover from "../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";
import menuImg from "../../../public/menu/banner3.jpg"
import dessertimg from "../../../public/menu/dessert-bg.jpeg"
import pizzaImg from "../../../public/menu/pizza-bg.jpg"
import saladImg from "../../../public/menu/salad-bg.jpg"
import soupImg from "../../../public/menu/soup-bg.jpg"

const Menu = () => {
    const [menus] = useMenu();
    // const popularItems = menus.filter(menu => menu.category === "popular" );
    const saladItems = menus.filter(menu => menu.category === "salad" );
    const drinksItems = menus.filter(menu => menu.category === "drinks" );
    const dessertItems = menus.filter(menu => menu.category === "dessert" );
    const pizzaItems = menus.filter(menu => menu.category === "pizza" );
    const soupItems = menus.filter(menu => menu.category === "soup" );
    const offeredItems = menus.filter(menu => menu.category === "offered" );
    return (
        <div>
            <Cover 
            title={"OUR MENU"}
            description={"Would you like to try a dish?"}
            img={menuImg}></Cover>
               <section>
                    <SectionTitle
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                    ></SectionTitle>
                </section>
                {/* offeredItems menu items */}
                <MenuCategory menus={offeredItems}></MenuCategory>
                {/* offeredItems dessertItems*/}
                <MenuCategory menuImg={dessertimg} title={"DESSERTS"} menus={dessertItems}></MenuCategory>
                {/* offeredItems pizza*/}
                <MenuCategory menuImg={pizzaImg} title={"PIZZA"} menus={pizzaItems}></MenuCategory>
                {/* offeredItems pizza*/}
                <MenuCategory menuImg={saladImg} title={"SALADS"} menus={saladItems}></MenuCategory>
                {/* offeredItems soup*/}
                <MenuCategory menuImg={soupImg} title={"SOUPS"} menus={soupItems}></MenuCategory>
                {/* offeredItems drinks*/}
                <MenuCategory menuImg={menuImg} title={"DRINKS"} menus={drinksItems}></MenuCategory>
        </div>
    );
};

export default Menu;