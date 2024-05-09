import React from "react";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import styles from './Layout.module.scss'

const Layout: React.FC = () => {
    return (
        <div className={styles["layout-page"]}>
            <Aside />
            <Main />
        </div>
    );
}

export default Layout;