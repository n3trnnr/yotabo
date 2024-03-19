import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ProjectsPage from '../pages/ProjectsPage';
import TrashPage from '../pages/TrashPage';
import SettingsPage from '../pages/SettingsPage';
// import ErrorPage from '../pages/ErrorPage';
import NotFound from '../pages/NotFound';
import BoardsPage from '../pages/BoardsPage';

const Router: React.FC = () => {

    const Location = useLocation()

    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/trash' element={<TrashPage />} />
            <Route path='/boards' element={<BoardsPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;