import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Projects from '../views/Projects';
import ProjectsSingle from '../views/Projects/Single';

const ProjectsRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/:id" element={<ProjectsSingle />} />
        </Routes>
    );
};

export default ProjectsRouter;