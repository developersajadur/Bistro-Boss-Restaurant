import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios()
    const {data: isAdmin} = useQuery({
        queryKey:[user?.email, "isAdmin"],
        queryFn: async () => {
          if(user?.email){
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data?.isAdmin;
          }
        },
        enabled:!!localStorage.getItem("token"),
  
    })
    return [isAdmin]
};

export default useAdmin;