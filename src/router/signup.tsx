import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Signup from 'views/Signup';

const SignupRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default SignupRouter;
