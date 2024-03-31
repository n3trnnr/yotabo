import React from "react";
import styles from './MainComponentHeader.module.scss'
import Buttons from "./Buttons/Buttons";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import ProjectNav from "./ProjectNav/ProjectNav";
import { useLocation } from "react-router-dom";

interface IMainComponentHeader {
    type: 'info' | 'none'
}

const MainComponentHeader: React.FC<IMainComponentHeader> = ({ type }) => {

    const setWidth = () => {
        if (type === 'info') return '50%';
        return '100%'
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

export default MainComponentHeader;