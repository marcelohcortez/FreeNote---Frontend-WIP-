import React from 'react';
import { FormikHelpers } from 'formik';

import { budgetFormValues } from 'types/budgetFormValues';
import { createBudget } from 'api/budgets';

const handleSubmit = async (
  values: budgetFormValues,
  { resetForm }: FormikHelpers<budgetFormValues>,
  setSuccess: (value: boolean) => void,
  setError: (value: boolean) => void,
): Promise<void> => {
  try {
    await createBudget(values);
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
