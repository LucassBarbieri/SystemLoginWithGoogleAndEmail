import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserFirebaseContext } from '../Context/Context';

export const ProtectRoutes = ({ children }) => {

    const { rol } = useContext(UserFirebaseContext);

    if (!rol){
        return <Navigate to={'/landing'} />;
    }

    return children
}

export default ProtectRoutes;