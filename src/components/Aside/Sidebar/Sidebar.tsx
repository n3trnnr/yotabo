import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { SidebarData } from './SidebarData.tsx'
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useStore.ts";
import { userActions } from "../../../store/slices/userSlice.ts";

const Sidebar = () => {

    const dispatch = useAppDispatch()

    return (
        <nav className={styles["aside-nav-wrapper"]}>
            <ul className={styles["main-nav-list"]}>
                {SidebarData.map((item) => (
                    item.title !== 'Log out' &&
                    <li key={item.key} >
                        <NavLink to={item.path} className={({ isActive }) => cn(styles["item-wrapper"], {
                            [styles['active']]: isActive
                        })}>
                            <div className={styles['nav-item']}>
                                {item.icon(styles['aside-nav-icon'])}
                                <span>{item.title}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className={styles["nav-item-logout"]}>
                {SidebarData.map((item) => (
                    item.title === 'Log out' &&
                    <li
                        onClick={() => dispatch(userActions.logOut())}
                        key={item.key}
                        className={styles["item-wrapper"]}>
                        <div>
                            <div className={styles["nav-item"]}>
                                {item.icon(styles['aside-nav-icon'])}
                                <span >{item.title}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;