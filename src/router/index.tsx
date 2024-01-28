import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../views/Home';
import BudgetsRouter from './budgets';
import ClientsRouter from './clients';
import PaymentsRouter from './payments';
import ProjectsRouter from './projects';
import UsersRouter from './users';
import NotFound from '../views/404';

const Router = () => (
  <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/budgets/*' element={<BudgetsRouter />} />
        <Route path='/clients/*' element={<ClientsRouter />} />
        <Route path='/payments/*' element={<PaymentsRouter />} />
        <Route path='/projects/*' element={<ProjectsRouter />} />
        <Route path='/users/*' element={<UsersRouter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  </BrowserRouter>
);

export default Router;