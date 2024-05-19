import Cover from "../Pages/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../public/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../Hooks/useMenu";
import OrderTab from "../Pages/Shared/FoodCard/OrderTab";
const Orders = () => {
    const [menus] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
      // const popularItems = menus.filter(menu => menu.category === "popular" );
      const saladItems = menus.filter(menu => menu.category === "salad" );
      const drinksItems = menus.filter(menu => menu.category === "drinks" );
      const dessertItems = menus.filter(menu => menu.category === "dessert" );
      const pizzaItems = menus.filter(menu => menu.category === "pizza" );
      const soupItems = menus.filter(menu => menu.category === "soup" );
  return (
    <div>
      <Cover img={orderImg} title="OUR SHOP"></Cover>
      <div className="mt-12 flex w-full justify-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab  items={saladItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab  items={pizzaItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab  items={soupItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab  items={dessertItems}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab  items={drinksItems}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;
