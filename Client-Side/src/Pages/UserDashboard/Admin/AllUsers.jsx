import { MdDeleteOutline } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  const handleUserRole = (id) => {
    axiosSecure
     .patch(`/users/admin/${id}`, {
        role: "Admin",
      })
     .then(res => {
        if(res.data.modifiedCount > 0){
            Swal.fire({
              title: "Updated!",
              text: "Your file has been updated.",
              icon: "success",
            });
        }
        refetch();
      })
     .catch((err) => {
        console.log(err);
      });
  }

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
         .delete(`/users/${id}`)
         .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          })
         .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHeading={"---How many??---"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>

      <div className="flex flex-col gap-8 p-8 bg-white">
        <div className="flex justify-start">
          <h1 className="text-3xl font-bold">Total orders: {users?.length}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>
                    { item.role === "admin" ? "Admin" : <button onClick={() => handleUserRole(item._id)}
                     className="p-2 rounded-lg bg-[#D1A054]">
                      <FaUsers className="text-3xl text-white" />
                    </button>}
                  </td>
                  <td>
                    <button
                       onClick={() => handleUserDelete(item._id)}
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

export default AllUsers;
