import React, { ReactNode } from "react";
import styles from './Sidebar.module.scss'
import { SidebarData } from './SidebarData.tsx'

interface ISidebarData {
    key: string;
    title: string;
    icon: (styleName: string) => ReactNode;
}

const Sidebar: React.FC = () => {
    return (
        <nav className={styles["aside-nav"]}>
            <ul className={styles["main-nav-list"]}>
                {SidebarData.map((item: ISidebarData) => (
                    item.title !== 'Log out' &&
                    <li key={item.key} className={styles["item-wrapper"]}>
                        <a className={styles["nav-item"]} key={item.key}>
                            {item.icon(styles['aside-nav-icon'])}
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className={styles["nav-item-logout"]}>
                {SidebarData.map((item: ISidebarData) => (
                    item.title === 'Log out' &&
                    <li key={item.key} className={styles["item-wrapper"]}>
                        <a className={styles["nav-item"]}>
                            {item.icon(styles['aside-nav-icon'])}
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;