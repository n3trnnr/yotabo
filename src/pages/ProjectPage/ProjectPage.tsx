import React from 'react';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader';
import styles from './ProjectPage.module.scss'
import Board from '../../components/Boards/Board';

const ProjectPage: React.FC = () => {
    return (
        <>
            <MainComponentHeader type={'info'} />
            <div className={styles["boards-container"]}>
                <div className={styles["board-container"]}>
                    <div className={styles["board-header"]}>
                        <div className={styles["round-mark-to-do"]}></div>
                        <span className={styles['board-title']}>TO DO</span>
                    </div>
                    <div className={styles["board-wrapper"]}>
                        <ul className={styles["tasks-list-wrapper"]}>
                            <Board />
                            <Board />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectPage;