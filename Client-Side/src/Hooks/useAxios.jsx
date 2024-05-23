import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/`,
    withCredentials: true, // Ensure this is set to send cookies
});

const useAxios = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Request Interceptor
       axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem("token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response Interceptor
       axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                const status = error.response ? error.response.status : null;
                if (status === 401 || status === 403) {
                    localStorage.removeItem("token");
                    await logOutUser();
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );
    }, [logOutUser, navigate]);

    return axiosSecure;
};

export default useAxios;
