import { createContext, useState, useEffect } from "react";
import { getDataAuth } from "utils/auth";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getDataAuth();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const initializeUserData = async () => {
            await fetchData();
        };

        initializeUserData();

        const authSubscription = getDataAuth().then(() => {
            fetchData();
        });

        return () => {
            authSubscription.then(unsubscribe => unsubscribe());
        };
    }, []);

    useEffect(() => {
        console.log("User state updated:", user);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
