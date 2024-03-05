import React from "react";
import styles from './Layout.module.scss'
import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = () => {
    return (
        <>
            <Aside />
            <div className={styles['main-section-container']}>
                <Header />
                <Main />
            </div>
        </>
    );
}

export default Layout;