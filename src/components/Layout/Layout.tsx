import React from "react";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import styles from './Layout.module.scss'
import GlobalHeader from "../GlobalHeader/GlobalHeader";

const Layout: React.FC = () => {
    return (
        <>
            <GlobalHeader />
            <div className={styles["layout-page"]}>
                <Aside />
                <Main />
            </div>
        </>
    );
}

export default Layout;