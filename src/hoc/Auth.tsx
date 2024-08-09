import React from 'react';
import { useAppSelector } from '../hooks/useStore';
import { Navigate } from 'react-router-dom';

interface IAuth {
    children: React.JSX.Element;
}

const Auth: React.FC<IAuth> = ({ children }) => {

    const jwt = useAppSelector((state) => state.user.jwt)

    if (!jwt) {
        return <Navigate to={'/signup'} />
    }

    return (
        <>
            {children}
        </>
    );
}

export default Auth;