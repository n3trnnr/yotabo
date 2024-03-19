import React from "react";
import styles from './ProgressBar.module.scss'

interface IProgressBar {
    type: 'big' | 'small'
}

const ProgressBar: React.FC<IProgressBar> = ({ type }) => {

    let progressPercentage: number = 50

    return (
        <div className={styles['progress-bar-wrapper']}>
            {type === 'big' ?
                <>
                    <div className={styles['progress-bar-fill']}>
                        <div className={styles['progress-bar-progress']} style={{ width: `${progressPercentage}%` }} />
                    </div>
                    <div>{`${progressPercentage}%`}</div>
                </>
                :
                <>
                    <div className={styles['progress-bar-fill-small']}>
                        <div className={styles['progress-bar-progress-small']} />
                    </div>
                </>
            }
        </div>
    );
}

export default ProgressBar;