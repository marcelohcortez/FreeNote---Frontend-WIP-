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
const createBudget = () => {
  return;
};
const deleteBudget = () => {
  return;
};
const updateBudget = () => {
  return;
};

export { getBudgets, getBudget, createBudget, deleteBudget, updateBudget };
