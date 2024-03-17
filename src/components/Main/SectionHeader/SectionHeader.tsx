import React from "react";
import { Link } from "react-router-dom";
import styles from './SectionHeader.module.scss'
import SectionButtons from "./SectionButtons/SectionButtons";
import SvgIcons from "../../UI/Svg/SvgIcons";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";

const SectionHeader: React.FC = () => {
    return (
        <header className={styles['section-header']}>
            <div className={styles['project-info']}>
                <nav className={styles['section-header-nav']}>
                    <ul className={styles['section-nav-list']}>
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
                <ProgressBar />
            </div>
            <div className={styles['buttons-wrapper']}>
                <SectionButtons />
            </div>
        </header>
    );
}

export default SectionHeader;