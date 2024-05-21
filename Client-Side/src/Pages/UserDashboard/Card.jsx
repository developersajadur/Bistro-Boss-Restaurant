import { MdDeleteOutline } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";
import useCard from "../../Hooks/useCard";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Card = () => {
    const [card, refetch] = useCard();
    const axiosSecure = useAxios();
    const totalPrice = card.reduce((total, item) => total + (item.price), 0);    

    const handleDelete = async (id) => {
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/cards/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch();
                }
            })
            }
          });
  
    };

    return (
        <div className="">
           <SectionTitle
           subHeading={"---My Cart---"}
           heading={"WANNA ADD MORE?"}
           ></SectionTitle>

            <div className="flex flex-col gap-8 p-8 bg-white">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Total orders: {card?.length}</h1>
                    <h1 className="text-3xl font-bold">Total price: ${totalPrice}</h1>
                    <button className="btn no-animation bg-[#D1A054] text-white">Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {card?.map((item, index) => (
                                <tr key={item._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="mask rounded-lg w-12 h-12">
                                                <img src={item?.image} alt="Item" />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{item?.name}</td>
                                    <td>${item?.price}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(item._id)} 
                                            className="p-2 rounded-lg bg-[#B91C1C]"
                                        >
                                            <MdDeleteOutline className="text-3xl text-white" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Card;
