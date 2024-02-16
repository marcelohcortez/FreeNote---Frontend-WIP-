import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import TextField from '@mui/material/TextField';

import validationSchema from 'validations/loginValidation';
import { LoginFormValues } from 'types/loginFormValues';
import { handleSubmit } from './handleSubmit';
import Alerts from 'components/Alerts';
import { useAuthContext } from 'hooks/useAuthContext';

const signin = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { dispatch } = useAuthContext();

  return (
    <>
      <h1>Login</h1>
      <Alerts successCreating={success} errorCreating={error} item="user" />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: LoginFormValues, resetForm) => {
          handleSubmit(values, resetForm, setSuccess, setError, dispatch);
        }}
      >
        <Form>
          <Field name="email">
            {({ field, meta }: { field: any; meta: any }) => (
              <TextField
                {...field}
                label="Email"
                error={meta.touched && !!meta.error}
                helperText={meta.touched ? meta.error : ''}
              />
            )}
          </Field>
          <Field name="password">
            {({ field, meta }: { field: any; meta: any }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                error={meta.touched && !!meta.error}
                helperText={meta.touched ? meta.error : ''}
              />
            )}
          </Field>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default signin;
