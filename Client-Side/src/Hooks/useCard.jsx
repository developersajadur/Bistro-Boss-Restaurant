import { useQuery } from "react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCard = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    const userEmail = user?.email
    const {refetch, data: card = []} = useQuery({
        queryKey:["card", userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cards?email=${userEmail}`);
            return res.data;
        }
    })
    return [card , refetch]
};

export default useCard;