import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import TextField from '@mui/material/TextField';
import validationSchema from 'validations/signupValidation';

import { SignupFormValues } from 'types/signupFormValues';
import { handleSubmit } from './handleSubmit';
import Alerts from 'components/Alerts';

const signup = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <h1>Signup</h1>
      <Alerts successCreating={success} errorCreating={error} item="user" />
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: SignupFormValues, resetForm) => {
          handleSubmit(values, resetForm, setSuccess, setError);
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
          <Field name="confirmPassword">
            {({ field, meta }: { field: any; meta: any }) => (
              <TextField
                {...field}
                type="password"
                label="Confirm Password"
                error={meta.touched && !!meta.error}
                helperText={meta.touched ? meta.error : ''}
              />
            )}
          </Field>
          <Field name="firstName">
            {({ field, meta }: { field: any; meta: any }) => (
              <TextField
                {...field}
                label="First Name"
                error={meta.touched && !!meta.error}
                helperText={meta.touched ? meta.error : ''}
              />
            )}
          </Field>
          <Field name="lastName">
            {({ field, meta }: { field: any; meta: any }) => (
              <TextField
                {...field}
                label="Last Name"
                error={meta.touched && !!meta.error}
                helperText={meta.touched ? meta.error : ''}
              />
            )}
          </Field>
          <button type="submit">Signup</button>
        </Form>
      </Formik>
    </>
  );
};

export default signup;
