import React from "react";
import styles from './Boards.module.scss'
import TaskCard from "../TaskCard/TaskCard";
import { Link } from "react-router-dom";

const Boards: React.FC = () => {
    return (
        <div className={styles["boards-container"]}>
            <div className={styles["board-container"]}>
                <div className={styles["board-header"]}>
                    <div className={styles["mark-to-do"]}></div>
                    <span className={styles['board-title']}>TO DO</span>
                </div>
                <div className={styles["board-wrapper"]}>
                    <ul className={styles["tasks-list-wrapper"]}>
                        <Link to="task">
                            <TaskCard />
                        </Link>
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                    </ul>
                </div>
            </div>

            <div className={styles["board-container"]}>
                <div className={styles["board-header"]}>
                    <div className={styles["mark-in-progress"]}></div>
                    <span className={styles['board-title']}>IN PROGRESS</span>
                </div>
                <div className={styles["board-wrapper"]}>
                    <ul className={styles["tasks-list-wrapper"]}>
                        <TaskCard />
                    </ul>
                </div>
            </div>

            <div className={styles["board-container"]}>
                <div className={styles["board-header"]}>
                    <div className={styles["mark-done"]}></div>
                    <span className={styles['board-title']}>DONE</span>
                </div>
                <div className={styles["board-wrapper"]}>
                    <ul className={styles["tasks-list-wrapper"]}>
                        <TaskCard />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Boards;