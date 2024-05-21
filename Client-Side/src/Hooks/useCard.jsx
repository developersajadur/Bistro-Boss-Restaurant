import { useQuery } from "react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCard = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    const {refetch, data: card = []} = useQuery({
        queryKey:["card", user?.user],
        enabled:!!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/cards?email=${user?.email}`);
            return res.data;
        }
    })
    return [card , refetch]
};

export default useCard;