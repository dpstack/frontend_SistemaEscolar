import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "utils/auth";
import { useState, useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const authResult = await isAuthenticated();
            setIsAuth(authResult);
        };

        checkAuth();
    }, []);

    if (isAuth === null) {
        return null;
    } else if (isAuth) {
        return children;
    } else {
        console.log("User is not authenticated, redirecting to login page");
        return <Navigate to={{ pathname: "/login", state: { from: location } }} />;
    }
};

export default PrivateRoute;