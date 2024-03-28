import React from "react";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import styles from './Layout.module.scss'

const Layout: React.FC = () => {
    return (
        <>
            <Aside />
            <div className={styles["layout-page"]}>
                <GlobalHeader />
                <Main />
            </div>
        </>
    );
}

export default Layout;