import React from 'react';
import MainSectionHeader from '../components/MainSectionHeader/MainSectionHeader'
import Project from '../components/Project/Project';
import styles from './ProjectsPage.module.scss'

const ProjectsPage: React.FC = () => {
    return (
        <>
            <MainSectionHeader />
            <div className={styles['projects-list-wrapper']}>
                <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
            </div>
        </>
    );
}

export default ProjectsPage;