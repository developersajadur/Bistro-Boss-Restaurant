import axios from "axios";
import { useState, useEffect } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get("jsons/menu.json");
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
