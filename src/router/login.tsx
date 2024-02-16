import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Login from 'views/Login';

const LoginRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default LoginRouter;
