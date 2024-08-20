import styles from './MainComponentHeader.module.scss'
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import ProjectNav from "./ProjectNav/ProjectNav";
import { IMainComponentHeader } from './MainComponentHeader.props';

//Компонент будет принимать данные в род.комп. sideBarData а не type будет влиять на ширину MainComponentHeader
//sideBarData будет передаваться в sideBar
const MainComponentHeader = ({ type, children, progressPercentage }: IMainComponentHeader) => {

    const setWidth = () => {
        if (type === 'info') return '50%';
        return '100%'
    }

    return (
        <header className={styles['main-component-header']}>
            {type === 'info' &&
                <div className={styles['project-info']}>
                    <ProjectNav />
                    <div className={styles['progress-bar-container']}>
                        <ProgressBar type={'big'} progressPercentage={progressPercentage ?? 0} />
                    </div>
                </div>
            }
            <div className={styles['buttons-wrapper']} style={{ width: setWidth() }}>
                {children}
                {/* <Buttons /> */}
            </div>
        </header>
    );
}

export default MainComponentHeader;