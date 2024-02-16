import React from 'react';
import { FormikHelpers } from 'formik';

import { LoginFormValues } from 'types/loginFormValues';
import { loginUser } from 'api/login';
import { Action } from 'types/action';

const handleSubmit = async (
  values: LoginFormValues,
  { resetForm }: FormikHelpers<LoginFormValues>,
  setSuccess: (value: boolean) => void,
  setError: (value: boolean) => void,
  dispatch: React.Dispatch<Action>,
) => {
  try {
    // signup user
    const loginResponse = await loginUser(values);

    // update the auth context
    dispatch({ type: 'LOGIN', payload: loginResponse });

    // save the user to local storage
    localStorage.setItem('user', JSON.stringify(loginResponse));

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
