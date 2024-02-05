import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Notes from '../views/Notes';
import NotesSingle from '../views/Notes/Single';

const ClientsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/:id" element={<NotesSingle />} />
    </Routes>
  );
};

export default ClientsRouter;
