import { budgetFormValues } from 'types/budgetFormValues';

const getBudgets = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}budgets`,
    );

    if (response.ok) {
      const data = response;
      return data.json();
    } else {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error('Error: error.message');
  }
};

const getBudget = () => {
  return;
};

const createBudget = async (values: budgetFormValues) => {
  try {
    const requestBudgetValues = {
      total: values.total,
      project: values.project._id,
      client: values.client._id,
      status: values.status.status,
    };

    const responseBudget = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}budgets`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBudgetValues),
      },
    );

    if (!responseBudget.ok) {
      throw new Error('HTTP error ' + responseBudget.status);
    }
    const requestBudgetStatus = await responseBudget.json();

    const responseBudgetStatus = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}budgets-status`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBudgetStatus),
      },
    );

    if (!responseBudgetStatus.ok) {
      throw new Error('HTTP error ' + responseBudgetStatus.status);
    }
  } catch (error) {
    console.error('Failed to submit form:', error);
  }
};
const deleteBudget = () => {
  return;
};
const updateBudget = () => {
  return;
};

export { getBudgets, getBudget, createBudget, deleteBudget, updateBudget };
