import React from 'react';
import { FormikHelpers } from 'formik';

import { budgetFormValues } from 'types/budgetFormValues';
import { createBudget } from 'api/budgets';
import { createBudgetStatus } from 'api/budgetsStatus';

const handleSubmit = async (
  values: budgetFormValues,
  { resetForm }: FormikHelpers<budgetFormValues>,
  setSuccess: (value: boolean) => void,
  setError: (value: boolean) => void,
) => {
  try {
    // create a new budget
    const budgetResponse = await createBudget(values);

    // if the budget was created, create a new status for taht budget
    if (budgetResponse._id) {
      await createBudgetStatus(values.status.status, budgetResponse._id);
      console.log('VALUES: ', values.status.status, budgetResponse._id);
    }

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    resetForm();
  } catch (error) {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
    console.error('Failed to submit form:', error);
  }
};

export { handleSubmit };
