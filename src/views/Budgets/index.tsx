import React, { useState } from 'react';

import AddNewItem from 'components/AddNewItem';
import { getBudgets } from 'api/budgets';
import { Budget } from 'types/budget';

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getBudgets();
      setBudgets(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Budgets</h1>
      <AddNewItem />

      {budgets && (
        <ul>
          {budgets.map((budget: Budget) => (
            <li key={budget._id}>
              <p>Total: {budget.total}</p>
              <p>Project ID: {budget.project}</p>
              <p>Client ID:{budget.client}</p>
              <p>Status:{budget.status}</p>
              <p>Created by ID:{budget.created_by}</p>
              <p>Edited by ID:{budget.edited_by}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Budgets;
