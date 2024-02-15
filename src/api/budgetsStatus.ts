const getBudgetsStatuses = async () => {
  try {
    const responseBudgetsStatuses = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}status/budgets`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!responseBudgetsStatuses.ok) {
      throw new Error('HTTP error ' + responseBudgetsStatuses.status);
    }
    // Parse the response data as JSON and return it
    const data = await responseBudgetsStatuses.json();

    return data;
  } catch (error) {
    console.error('Failed to retrieve data:', error);
  }
};

const getBudgetStatus = async (value: string) => {
  try {
    const responseBudgetStatus = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}status/budgets/${value}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!responseBudgetStatus.ok) {
      throw new Error('HTTP error ' + responseBudgetStatus.status);
    }

    return responseBudgetStatus.json();
  } catch (error) {
    console.error('Failed to retrieve data:', error);
  }
};

const createBudgetStatus = async (status: string, budgetId: string) => {
  try {
    const requestBudgetValues = {
      status: status,
      budget: budgetId,
    };

    const responseBudget = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}status/budgets`,
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
  } catch (error) {
    console.error('Failed to submit form:', error);
  }
};

export { getBudgetsStatuses, getBudgetStatus, createBudgetStatus };
