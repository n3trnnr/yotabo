import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader'
import Project from '../../components/Project/Project';
import styles from './ProjectsPage.module.scss'

//Не забыть переписать путь в Link на projects/id

const ProjectsPage: React.FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <MainComponentHeader type={'none'} />
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