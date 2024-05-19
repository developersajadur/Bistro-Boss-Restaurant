import FoodCard from "./FoodCard";

const OrderTab = ({items}) => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                items?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
            }
            </div>
        </div>
    );
};

export default OrderTab;