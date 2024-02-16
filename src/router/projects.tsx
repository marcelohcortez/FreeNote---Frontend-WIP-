import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Projects from 'views/Projects';
import ProjectsSingle from 'views/Projects/Single';

const ProjectsRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Projects />} />
        <Route path=":id" element={<ProjectsSingle />} />
      </Route>
    </Routes>
  );
};

export default ProjectsRouter;
