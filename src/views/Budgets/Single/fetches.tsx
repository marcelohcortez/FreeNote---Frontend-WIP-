import React from 'react';

import { getBudget } from 'api/budgets';
import { getBudgetStatus } from 'api/budgetsStatus';
import { Budget as BudgetType } from 'types/budget';

const fetchBudgetById = async (
  id: string,
  setBudget: React.Dispatch<React.SetStateAction<BudgetType | null>>,
) => {
  const data = await getBudget(id);
  setBudget(data);
};

const fetchBudgetStatusById = async (
  id: string,
  setBudget: React.Dispatch<React.SetStateAction<BudgetType | null>>,
  prevBudget: BudgetType | null,
) => {
  const data = await getBudgetStatus(id);
  if (data && data[0]) {
    setBudget((prevBudget) => {
      if (prevBudget) {
        return { ...prevBudget, status: data[0].status };
      }
      return null;
    });
  }
};

export { fetchBudgetById, fetchBudgetStatusById };
