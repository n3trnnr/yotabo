import React from "react";
import styles from './ProgressBar.module.scss'

const ProgressBar: React.FC = () => {
    return (
        <div className={styles['progress-bar-wrapper']}>
            <div className={styles['progress-bar-fill']}>
                <div className={styles['progress-bar-progress']} />
            </div>
            <div>45%</div>
        </div>
    );
}

export default ProgressBar;