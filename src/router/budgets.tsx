import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Budgets from '../views/Budgets';
import BudgetsSingle from '../views/Budgets/Single';
import AddBudget from '../views/Budgets/Add';

const BudgetsRouter: React.FC = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Budgets />} />
        <Route path=":id" element={<BudgetsSingle />} />
        <Route path="add" element={<AddBudget />} />
      </Route>
    </Routes>
  );
};

export default BudgetsRouter;
