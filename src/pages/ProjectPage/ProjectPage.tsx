import React from 'react';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader';
import styles from './ProjectPage.module.scss'
import Boards from '../../components/Boards/Boards';

const ProjectPage: React.FC = () => {
    return (
        <>
            <MainComponentHeader type={'info'} />
            <Boards />
        </>
    );
}

export default ProjectPage;