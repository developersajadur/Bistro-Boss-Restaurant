import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/`,
    withCredentials: true,
});
const usePublicAxios = () => {
    return axiosPublic
};

export default usePublicAxios;