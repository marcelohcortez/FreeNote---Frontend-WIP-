import React, { useEffect, useState } from 'react';

import { getBudget } from 'api/budgets';
import { useParams } from 'react-router-dom';
import { Budget as BudgetType } from 'types/budget';
import { getBudgetStatus } from 'api/budgetsStatus';
import { fetchBudgetById, fetchBudgetStatusById } from './fetches';

const BudgetsSingle = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No Budget Id found, check you URL</div>;
  }

  const [budget, setBudget] = useState<BudgetType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBudgetById(id, setBudget).then(() =>
      fetchBudgetStatusById(id, setBudget, budget),
    );
  }, [id]);

  useEffect(() => {
    if (budget && budget.status !== '' && budget.status !== undefined) {
      setIsLoading(false);
    }
  }, [budget]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {budget && (
        <>
          <div>BUDGET {budget._id}</div>
          <div key={budget._id}>
            <div>Total: {budget.total}</div>
            <div>Project: {budget.project}</div>
            <div>Client: {budget.client}</div>
            <div>Status: {budget.status}</div>
            <div>Created By: {budget.created_by}</div>
            <div>Edited By: {budget.edited_by}</div>
          </div>
        </>
      )}
    </>
  );
};

export default BudgetsSingle;
