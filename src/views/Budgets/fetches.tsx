import React from 'react';

import { getBudgets } from 'api/budgets';
import { getBudgetsStatuses } from 'api/budgetsStatus';
import { Budget } from 'types/budget';
import { BudgetStatus } from 'types/budgetStatus';

const fetchBudgets = async (
  setBudgets: React.Dispatch<React.SetStateAction<Budget[] | undefined>>,
) => {
  const data = await getBudgets();
  setBudgets(data);
};

const fetchStatus = async (
  setBudgetsStatuses: React.Dispatch<
    React.SetStateAction<BudgetStatus[] | undefined>
  >,
) => {
  const data = await getBudgetsStatuses();
  setBudgetsStatuses(data);
};

export { fetchBudgets, fetchStatus };
