import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ProjectsPage from '../pages/ProjectsPage';
// import BoardsPage from '../pages/BoardsPage';
import TrashPage from '../pages/TrashPage';
import SettingsPage from '../pages/SettingsPage';
// import ErrorPage from '../pages/ErrorPage';
import NotFound from '../pages/NotFound';

const Router: React.FC = () => {

    const Location = useLocation()
    // console.log('Location', Location.pathname);

    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/trash' element={<TrashPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;