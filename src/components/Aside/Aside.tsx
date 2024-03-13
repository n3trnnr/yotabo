import React from "react";
import styles from './Aside.module.scss'
import Sidebar from "./Sidebar/Sidebar";
import SvgIcons from "../UI/Svg/SvgIcons";

const Aside: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles["logo-container"]}>
                <a className={styles["logo-wrapper"]}>
                    <SvgIcons iconName={'logo'} styleName={styles['logo-icon']} />
                    <span>Yotabo</span>
                </a>
            </div>
            <Sidebar />
        </aside>
    );
}

export default Aside;

