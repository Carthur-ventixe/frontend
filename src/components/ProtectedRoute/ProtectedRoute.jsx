import React, { Children, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AccountContext } from "../../contexts/AccountContext";

const ProtectedRoute = ({ children }) => {
    const { validateToken } = useContext(AccountContext);
    const location = useLocation();
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkIfValid = async () => {
            const result = await validateToken();
            setIsValid(result);
            setLoading(false);
        };
        checkIfValid();
    },[]);

    if (loading) {
    return <div>Checking authentication...</div>;
    }

    if (!isValid) {
        return <Navigate to="/signin" state={{ from: location.pathname }} replace />
    }

    return children;
};

export default ProtectedRoute;