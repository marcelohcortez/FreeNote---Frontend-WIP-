import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Notes from 'views/Notes';
import NotesSingle from 'views/Notes/Single';

const ClientsRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Notes />} />
        <Route path=":id" element={<NotesSingle />} />
      </Route>
    </Routes>
  );
};

export default ClientsRouter;
