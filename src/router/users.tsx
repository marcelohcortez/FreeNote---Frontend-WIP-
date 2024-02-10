import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Users from '../views/Users';
import UsersSingle from '../views/Users/Single';

const UsersRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Users />} />
        <Route path=":id" element={<UsersSingle />} />
      </Route>
    </Routes>
  );
};

export default UsersRouter;
