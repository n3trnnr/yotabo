import React from "react";
import styles from './ProjectCard.module.scss'
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import SvgIcons from "../UI/Svg/SvgIcons";
import Button from "../UI/Button/Button";

interface IProject {
    title: string;
    description: string;
    creationDate: string;
}

const Project: React.FC<IProject> = ({ title, description, creationDate }) => {
    return (
        <div className={styles['project-card-container']}>
            <div className={styles['project-card-wrapper']}>
                <div className={styles.title}>{title}</div>
                <p className={styles.description}>{description}</p>
                <div className={styles['progress-bar']}>
                    <ProgressBar type={'small'} />
                </div>
                <div className={styles['creation-date']}>{creationDate}</div>
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

export default Project;