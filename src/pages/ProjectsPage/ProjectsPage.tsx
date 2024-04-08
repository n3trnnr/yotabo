import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader'
import Project from '../../components/Project/Project';
import styles from './ProjectsPage.module.scss'
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Button from '../../components/UI/Button/Button';
import SvgIcons from '../../components/UI/Svg/SvgIcons';

//Не забыть переписать путь в Link на projects/id

const ProjectsPage: React.FC = () => {

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState<boolean>(false)
    const handleShowModal = (isShown: boolean) => {
        setShowModal(isShown)
    }

    return (
        <>
            {showModal &&
                <div className={styles["modal-window"]}>
                    <ModalWindow type={"simple"} modalWindowTitle={"Create project"} handleShowModal={handleShowModal} />
                </div>
            }

            <MainComponentHeader type={'none'}>
                <Button buttonShape={'square'} colorStyle={'light-grey'} margin={'10px'}>
                    <SvgIcons iconName={'boardView'} />
                </Button>
                <Button buttonShape={'square'} colorStyle={'light-grey'} margin={'10px'}>
                    <SvgIcons iconName={'listView'} />
                </Button>
                <Button buttonShape={'rectangle'} colorStyle={'light-grey'} title={'Filter'} margin={'10px'}>
                    <SvgIcons iconName={'filter'} />
                </Button>
                <Button handleClick={() => handleShowModal(true)} buttonShape={'rectangle'} colorStyle={'blue'} title={'New project'} margin={'10px'}>
                    <SvgIcons iconName={'addNewElement'} />
                </Button>
            </MainComponentHeader>

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