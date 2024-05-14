import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "utils/auth";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "contexts/UserContext";
import { hasPermission } from "utils/permisos";

const PrivateRoute = ({ children, requiredPermission }) => {
    const location = useLocation();
    const [isAuth, setIsAuth] = useState(null);
    const user = useContext(UserContext);


    useEffect(() => {
        const checkAuth = async () => {
            const authResult = await isAuthenticated();
            setIsAuth(authResult);
        };

        checkAuth();
    }, []);
    if (isAuth === null) {
        return null;
        // } else if (isAuth && user && hasPermission(user.rol, requiredPermission)) {
    } else if (isAuth) {
        return children;
    } else {
        console.log("User is not authenticated, redirecting to login page");
        return <Navigate to={{ pathname: "/login", state: { from: location } }} />;
    }
};

export default PrivateRoute;