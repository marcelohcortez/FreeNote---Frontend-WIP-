import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';

import validationSchema from 'validations/budgetValidation';
import { budgetFormValues } from 'types/budgetFormValues';
import { fetches } from './fetches';
import { handleSubmit } from './handleSubmit';
import Alerts from 'components/Alerts';

const AddBudget = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetches(
      setProjects as (data: string[]) => void,
      setClients as (data: string[]) => void,
      setStatuses as (data: string[]) => void,
    );
  }, []);

  return (
    <>
      <h1>Add a new Budget</h1>
      <Alerts successCreating={success} errorCreating={error} item="budget" />

      <Formik
        initialValues={{
          total: '',
          project: { _id: '', name: '' },
          client: { _id: '', name: '' },
          status: { status: '' },
        }}
        validationSchema={validationSchema}
        onSubmit={(values: budgetFormValues, resetForm) => {
          handleSubmit(values, resetForm, setSuccess, setError);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field name="total">
              {({ field, meta }: { field: any; meta: any }) => (
                <TextField
                  {...field}
                  label="Total"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched ? meta.error : ''}
                />
              )}
            </Field>
            <Autocomplete
              options={projects as { name: string }[]}
              getOptionLabel={(option) => option.name}
              value={values.project}
              onChange={(event, newValue) => {
                setFieldValue('project', newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Project" />
              )}
            />
            <Typography variant="caption" color="error">
              <ErrorMessage name="project.name" component="div" />
            </Typography>
            <Autocomplete
              options={clients as { name: string }[]}
              getOptionLabel={(option) => option.name}
              value={values.client}
              onChange={(event, newValue) => {
                setFieldValue('client', newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Client" />}
            />
            <Typography variant="caption" color="error">
              <ErrorMessage name="client.name" component="div" />
            </Typography>
            <Autocomplete
              options={statuses.map((status) => ({ status: status }))}
              getOptionLabel={(option) => option.status}
              value={values.status}
              onChange={(event, newValue) => {
                setFieldValue('status', newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Status" />}
            />
            <Typography variant="caption" color="error">
              <ErrorMessage name="status.status" component="div" />
            </Typography>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddBudget;
