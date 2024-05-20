import axios from "axios";
import { useState, useEffect } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxios();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axiosSecure.get("/menus");
                setMenus(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return [menus, loading, error];
};

export default useMenu;
