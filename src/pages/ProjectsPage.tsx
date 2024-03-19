import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainSectionHeader from '../components/MainSectionHeader/MainSectionHeader'
import Project from '../components/Project/Project';
import styles from './ProjectsPage.module.scss'

const ProjectsPage: React.FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <MainSectionHeader type={'none'} />
            <div className={styles['projects-list-container']}>
                <div className={styles['projects-list-wrapper']}>

                    <div onDoubleClick={() => navigate('/boards')}>
                        <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    </div>

                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                    <Project title={'Task-board'} description={'Проект для структурирования работы с задачами'} creationDate={'20.12.23'} />
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;