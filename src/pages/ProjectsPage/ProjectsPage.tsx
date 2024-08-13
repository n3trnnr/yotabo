import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.scss'
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Button from '../../components/UI/Button/Button';
import SvgIcons from '../../components/UI/Svg/SvgIcons';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { getProjectsData } from '../../store/slices/projectSlice';

//Не забыть переписать путь в Link на projects/id

const ProjectsPage = () => {
    const dispatch = useAppDispatch()
    const projects = useAppSelector((state) => state.project.projects)
    const [showModal, setShowModal] = useState<boolean>(false)
    const handleShowModal = (isShown: boolean) => {
        setShowModal(isShown)
    }
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProjectsData())
    }, [])

    // console.log('projects', projects);

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

                    {projects && projects.map((project) => (
                        <div onDoubleClick={() => navigate(`/projects/${project.id}/boards`)} key={project.id}>
                            <ProjectCard key={project.id} projectData={project} />
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default ProjectsPage;