import SectionTitle from "../../../Components/SectionTitle";
import { MdDeleteOutline } from "react-icons/md";
import useMenu from "../../../Hooks/useMenu";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menus] = useMenu();
    const axiosSecure = useAxios();
    const { data: menu = [], refetch } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
          const res = await axiosSecure.get("/menus");
          return res.data;
        },
      });






      const handleDeleteItem = async (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menus/${id}`);
            if (res.data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                refetch();
            }
          }
        });
      };

      return (
    <div>
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
       <div className="flex flex-col gap-8 p-8 bg-white">
        <div className="flex justify-start">
          <h1 className="text-3xl font-bold">Total orders: {menus.length}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>EDIT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menus?.map((item, index) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <th>
                  <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} />
              </div>
            </div>
                  </th>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>
                    <Link to={`/dashboard/update-items/${item?._id}`}>
                    <button
                     className="p-2 rounded-lg bg-[#D1A054]">
                      <FaRegPenToSquare className="text-3xl text-white" />
                    </button>
                    </Link>
                  </td>
                  <td>
                    <button
                       onClick={() => handleDeleteItem(item._id)}
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

export default ManageItems;
