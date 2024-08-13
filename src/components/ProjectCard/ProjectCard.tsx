import styles from './ProjectCard.module.scss'
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import SvgIcons from "../UI/Svg/SvgIcons";
import Button from "../UI/Button/Button";
import { IProjectCard } from "./ProjectCard.props";

const ProjectCard = ({ projectData }: IProjectCard) => {
    return (
        <div className={styles['project-card-container']}>
            <div className={styles['project-card-wrapper']}>
                <div className={styles.title}>{projectData.attributes.title}</div>
                <p className={styles.description}>{projectData.attributes.description}</p>
                <div className={styles['progress-bar']}>
                    <ProgressBar type={'small'} progressPercentage={projectData.attributes.progress} />
                </div>
                <div className={styles['creation-date']}>{new Date(projectData.attributes.createdAt).toLocaleDateString()}</div>
                <span className={styles['burger-menu']}>
                    <Button colorStyle={'none'}>
                        <SvgIcons iconName={'burgerMenu'} />
                    </Button>
                </span>
                <span className={styles.favourites}>
                    <Button colorStyle={'none'} >
                        <SvgIcons iconName={'favourites'} />
                    </Button>
                </span>
            </div>
        </div>
    );
}

export default ProjectCard;