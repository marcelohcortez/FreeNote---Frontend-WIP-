import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../views/Home';
import BudgetsRouter from './budgets';
import ClientsRouter from './clients';
import NotesRouter from './notes';
import PaymentsRouter from './payments';
import ProjectsRouter from './projects';
import UsersRouter from './users';
import SignupRouter from './signup';
import LoginRouter from './login';
import NotFound from '../views/404';

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/budgets/*" element={<BudgetsRouter />} />
    <Route path="/clients/*" element={<ClientsRouter />} />
    <Route path="/notes/*" element={<NotesRouter />} />
    <Route path="/payments/*" element={<PaymentsRouter />} />
    <Route path="/projects/*" element={<ProjectsRouter />} />
    <Route path="/users/*" element={<UsersRouter />} />
    <Route path="/signup/*" element={<SignupRouter />} />
    <Route path="/login/*" element={<LoginRouter />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default Router;
