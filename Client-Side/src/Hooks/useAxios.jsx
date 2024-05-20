import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/`,
    // withCredentials: true,
});
const useAxios = () => {
    return axiosSecure;
};

export default useAxios;