import React from "react";
import styles from './MainSectionHeader.module.scss'
import Buttons from "./Buttons/Buttons";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import ProjectNav from "./ProjectNav/ProjectNav";

interface IMainSectionHeader {
    type: 'info' | 'none'
}

const MainSectionHeader: React.FC<IMainSectionHeader> = ({ type }) => {

    const setWidth = () => {
        if (type === 'none') {
            return '100%'
        } else {
            return '50%'
        }
    }

    return (
        <header className={styles['section-header']}>
            {type === 'info' && <div className={styles['project-info']}>
                <ProjectNav />
                <div className={styles['progress-bar-container']}>
                    <ProgressBar type={'big'} />
                </div>
            </div>}
            <div className={styles['buttons-wrapper']} style={{ width: setWidth() }}>
                <Buttons />
            </div>
        </header>
    );
}

export default MainSectionHeader;