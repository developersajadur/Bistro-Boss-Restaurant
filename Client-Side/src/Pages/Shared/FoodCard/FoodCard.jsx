import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/useAxios";
import useCard from "../../../Hooks/useCard";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const [, refetch] = useCard();


    const handleAddCard = (food) => {
        const cardItems = {
            foodId: food._id,
            userEmail: user?.email,
            foodName: food.name,
            foodImg: food.image,
            foodPrice: food.price,
            foodRecipe: food.recipe,
        }
        if (user && cardItems?.userEmail) {
            axiosSecure.post("/cards",cardItems)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success(`${food.name} added to your card`);
                }
                refetch();
            })
            .catch(error => {
                toast.error("Failed to add food to card");
                console.error("There was an error adding the food to the card:", error);
            });
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
                        <button onClick={() => handleAddCard(item)} className="btn btn-outline w-fit h-fit bg-[#E8E8E8] border-0 mt-10 border-b-4 border-[#BB8506] text-[#BB8506] rounded-lg">
                            ADD TO CARD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
