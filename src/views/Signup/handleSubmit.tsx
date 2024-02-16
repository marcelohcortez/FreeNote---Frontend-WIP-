import React from 'react';
import { FormikHelpers } from 'formik';

import { SignupFormValues } from 'types/signupFormValues';
import { signupUser } from 'api/signup';
import { Action } from 'types/action';

const handleSubmit = async (
  values: SignupFormValues,
  { resetForm }: FormikHelpers<SignupFormValues>,
  setSuccess: (value: boolean) => void,
  setError: (value: boolean) => void,
  dispatch: React.Dispatch<Action>,
) => {
  try {
    // signup user
    const signupResponse = await signupUser(values);

    // update the auth context
    dispatch({ type: 'LOGIN', payload: signupResponse });

    // save the user to local storage
    localStorage.setItem('user', JSON.stringify(signupResponse));

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
