import React from "react";
import styles from './Aside.module.scss'
import Sidebar from "./Sidebar/Sidebar";
import SvgIcons from "../UI/Svg/SvgIcons";

const Aside: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles["logo-container"]}>
                <div className={styles["logo-wrapper"]}>
                    <SvgIcons iconName={'logo'} styleName={styles['logo-icon']} />
                    Yotabo
                </div>
            </div>
            <Sidebar />
        </aside>
    );
}

export default Aside;

