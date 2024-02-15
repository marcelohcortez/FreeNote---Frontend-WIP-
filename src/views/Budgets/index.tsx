import React, { useEffect, useState } from 'react';

import AddNewItem from 'components/AddNewItem';
import { Budget } from 'types/budget';
import { Link } from 'react-router-dom';
import { BudgetStatus } from 'types/budgetStatus';
import { fetchBudgets, fetchStatus } from './fetches';

const Budgets = () => {
  const [budgets, setBudgets] = useState<Array<Budget>>();
  const [budgetsStatuses, setBudgetsStatuses] = useState<Array<BudgetStatus>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBudgets(setBudgets).then(() => fetchStatus(setBudgetsStatuses));
  }, []);

  useEffect(() => {
    if (budgets && budgetsStatuses) {
      setIsLoading(false);
    }
  }, [budgets, budgetsStatuses]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Budgets</h1>
      <AddNewItem />

      {budgets &&
        budgets.map((budget: Budget) => {
          const budgetStatus = budgetsStatuses?.find(
            (status: BudgetStatus) => status.budget === budget._id,
          );
          return (
            <Link to={`${budget._id}`} key={budget._id}>
              <p>Total: {budget.total}</p>
              <p>Project ID: {budget.project}</p>
              <p>Client ID:{budget.client}</p>
              <p>Status:{budgetStatus ? budgetStatus.status : 'N/A'}</p>
              <p>Created by ID:{budget.created_by}</p>
              <p>Edited by ID:{budget.edited_by}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default Budgets;
