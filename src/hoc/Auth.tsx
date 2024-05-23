import * as React from 'react';
import { Navigate } from 'react-router-dom';

interface IAuth {
    children: React.JSX.Element;
}

const Auth: React.FC<IAuth> = ({ children }) => {

    // const data = false;
    // if (!data) {
    //     return <Navigate to={'/signup'} />
    // }

    return (
        <>
            {children}
        </>
    );
}

export default Auth;