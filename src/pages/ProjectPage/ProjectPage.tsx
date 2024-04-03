import React, { useState } from 'react';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader';
import styles from './ProjectPage.module.scss'
import Boards from '../../components/Boards/Boards';
import Button from '../../components/UI/Button/Button';
import SvgIcons from '../../components/UI/Svg/SvgIcons';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import AdvancedSettings from '../../components/ModalWindow/AdvancedSettings/AdvancedSettings';

const ProjectPage: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const handleShowModal = () => {
        if (showModal) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    return (
        <>
            {showModal &&
                <div className={styles["modal-window"]}>
                    <ModalWindow title={"Create task"} handleShowModal={handleShowModal}>
                        <AdvancedSettings />
                    </ModalWindow>
                </div>
            }

            <MainComponentHeader type={'info'}>
                <Button buttonShape={'square'} colorStyle={'light-grey'} margin={'10px'}>
                    <SvgIcons iconName={'boardView'} />
                </Button>
                <Button buttonShape={'square'} colorStyle={'light-grey'} margin={'10px'}>
                    <SvgIcons iconName={'listView'} />
                </Button>
                <Button buttonShape={'rectangle'} colorStyle={'light-grey'} title={'Filter'} margin={'10px'}>
                    <SvgIcons iconName={'filter'} />
                </Button>
                <Button handleClick={handleShowModal} buttonShape={'rectangle'} colorStyle={'blue'} title={'New task'} margin={'10px'}>
                    <SvgIcons iconName={'addNewElement'} />
                </Button>
            </MainComponentHeader>

            <Boards />
        </>
    );
}

export default ProjectPage;