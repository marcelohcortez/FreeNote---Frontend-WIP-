import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Clients from '../views/Clients';
import ClientsSingle from '../views/Clients/Single';

const ClientsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Clients />} />
        <Route path=":id" element={<ClientsSingle />} />
      </Route>
    </Routes>
  );
};

export default ClientsRouter;
