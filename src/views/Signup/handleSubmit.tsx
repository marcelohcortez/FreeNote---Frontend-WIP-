import React from 'react';
import { FormikHelpers } from 'formik';

import { SignupFormValues } from 'types/signupFormValues';
import { signupUser } from 'api/signup';

const handleSubmit = async (
  values: SignupFormValues,
  { resetForm }: FormikHelpers<SignupFormValues>,
  setSuccess: (value: boolean) => void,
  setError: (value: boolean) => void,
) => {
  try {
    // signup user
    const signupResponse = await signupUser(values);

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
