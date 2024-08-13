import { useEffect, useState } from 'react';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader';
import styles from './ProjectPage.module.scss'
import Button from '../../components/UI/Button/Button';
import SvgIcons from '../../components/UI/Svg/SvgIcons';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { getProjectDataById } from '../../store/slices/projectSlice';

const ProjectPage = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const project = useAppSelector((state) => state.project.project)
    console.log('project', project);


    useEffect(() => {
        if (id) {
            dispatch(getProjectDataById(+id))
        }
    }, [])

    const [showModal, setShowModal] = useState<boolean>(false)
    const handleShowModal = (isShown: boolean) => {
        setShowModal(isShown)
    }

    return (
        <>
            {showModal &&
                <div className={styles["modal-window"]}>
                    <ModalWindow type={"advanced"} modalWindowTitle={"Create task"} handleShowModal={handleShowModal} />
                </div>
            }

            <MainComponentHeader
                type={'info'}
                progressPercentage={project?.attributes?.progress}
            >
                <Button buttonShape={'square'} colorStyle={'light-grey'} margin={'10px'}>
                    <SvgIcons iconName={'boardView'} />
                </Button>
                <Button buttonShape={'square'} colorStyle={'light-grey'} margin={'10px'}>
                    <SvgIcons iconName={'listView'} />
                </Button>
                <Button buttonShape={'rectangle'} colorStyle={'light-grey'} title={'Filter'} margin={'10px'}>
                    <SvgIcons iconName={'filter'} />
                </Button>
                <Button handleClick={() => handleShowModal(true)} buttonShape={'rectangle'} colorStyle={'blue'} title={'New task'} margin={'10px'}>
                    <SvgIcons iconName={'addNewElement'} />
                </Button>
            </MainComponentHeader>

            <Outlet />
        </>
    );
}

export default ProjectPage;