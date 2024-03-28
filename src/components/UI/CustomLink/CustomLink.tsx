import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './CustomLink.module.scss'

interface ICustomLink {
    to: string;
    children: ReactNode;
}

const CustomLink: React.FC<ICustomLink> = ({ to, children }) => {
    return (
        <Link to={`${to}`} >
            {children}
        </Link>
    );
}

export default CustomLink;