import React from "react";
import styles from './MainSectionHeader.module.scss'
import Buttons from "./Buttons/Buttons";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import ProjectNav from "./ProjectNav/ProjectNav";

const MainSectionHeader: React.FC = () => {
    return (
        <header className={styles['section-header']}>
            <div className={styles['project-info']}>
                <ProjectNav />
                <div className={styles['progress-bar-container']}>
                    <ProgressBar type={'big'} />
                </div>
            </div>
            <div className={styles['buttons-wrapper']}>
                <Buttons />
            </div>
        </header>
    );
}

export default MainSectionHeader;