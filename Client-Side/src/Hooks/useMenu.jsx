import useAxios from "./useAxios";
import { useQuery } from "react-query";

const useMenu = () => {
  const axiosSecure = useAxios();

  const {
    data: menus = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery("menus", async () => {
    const res = await axiosSecure.get("/menus");
    return res.data;
  });

  return [menus, loading, error, refetch];
};

export default useMenu;
