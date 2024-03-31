import React from 'react';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import TrashPage from '../pages/TrashPage';
import SettingsPage from '../pages/SettingsPage';
import ErrorPage from '../pages/ErrorPage';
import NotFound from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import Layout from '../components/Layout/Layout';
import TaskPage from '../pages/TaskPage/TaskPage';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<DashboardPage />} />
        <Route path='projects' element={<ProjectsPage />} />
        <Route path='projects/:id' element={<ProjectPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='trash' element={<TrashPage />} />
        <Route path='boards' element={<ProjectPage />} />
        <Route path='task' element={<TaskPage />} />
        <Route path='*' element={<NotFound />} />
    </Route>
))

const Router: React.FC = () => {

    return (
        <RouterProvider router={router} />
    );
}

export default Router;