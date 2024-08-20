import styles from './ProgressBar.module.scss'
import { IProgressBar } from "./ProgressBar.props";

const ProgressBar = ({ type, progressPercentage = 0 }: IProgressBar) => {

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
                        <div className={styles['progress-bar-progress-small']} style={{ width: `${progressPercentage}` }} />
                    </div>
                </>
            }
        </div>
    );
}

export default ProgressBar;