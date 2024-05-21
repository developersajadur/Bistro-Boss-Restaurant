import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/useAxios";
import useCard from "../../../Hooks/useCard";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const [, refetch] = useCard(); // Ensure refetch is captured correctly

    const handleAddCard = async (food) => {
        const cardItems = {
            foodId: food._id,
            email: user?.email,
            name: food.name,
            image: food.image,
            price: food.price,
            recipe: food.recipe,
        };

        if (user && cardItems?.email) {
            try {
                const res = await axiosSecure.post("/cards", cardItems);
                if (res.data.insertedId) {
                    toast.success(`${food.name} added to your card`);
                    refetch();
                }
            } catch (error) {
                toast.error("Failed to add to card");
            }
        } else {
            toast.error("Please login first");
        }
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full" src={item?.image} alt="food" />
                    <p className="absolute bg-[#111827] text-white px-5 py-2 right-0 top-0">${item?.price}</p>
                </figure>
                <div className="card-body bg-[#F3F3F3]">
                    <h2 className="card-title text-center">{item?.name}</h2>
                    <p>{item?.recipe}</p>
                    <div className="flex w-full flex-col justify-center items-center">
                        <button 
                            onClick={() => handleAddCard(item)} 
                            className="btn btn-outline w-fit h-fit bg-[#E8E8E8] border-0 mt-10 border-b-4 border-[#BB8506] text-[#BB8506] rounded-lg"
                        >
                            ADD TO CARD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
