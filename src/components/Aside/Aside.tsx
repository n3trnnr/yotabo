import React from "react";
import styles from './Aside.module.scss'
import Sidebar from "./Sidebar/Sidebar";

const Aside: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <Sidebar />
        </aside>
    );
}

export default Aside;

