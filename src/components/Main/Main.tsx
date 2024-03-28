import React from "react";
import styles from './Main.module.scss'
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            {/* <section className={styles.section}> */}
            <Outlet />
            {/* </section> */}
        </main>
    );
}

export default Main;