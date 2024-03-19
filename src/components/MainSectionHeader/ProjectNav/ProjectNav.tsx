import React from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../../UI/Svg/SvgIcons";
import styles from './ProjectNav.module.scss'

const ProjectNav: React.FC = () => {
    return (
        <nav className={styles['project-nav']}>
            <ul className={styles['project-nav-list']}>
                <li>
                    <Link to={'/description'} className={styles['nav-item']}>
                        <div className={styles['icon-wrapper']}>
                            <SvgIcons iconName={'description'} />
                        </div>
                        <span>Description</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/boards'} className={styles['nav-item']}>
                        <div className={styles['icon-wrapper']}>
                            <SvgIcons iconName={'boards'} />
                        </div>
                        <span>Boards</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default ProjectNav;