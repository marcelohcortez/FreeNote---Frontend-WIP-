import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import validationSchema from 'validations/budgetValidation';
import {
  createBudget,
  getClientsNamesAndIds,
  getProjectsNamesAndIds,
} from 'api';
import { budgetFormValues } from 'types/budgetFormValues';
import { Alert, Typography } from '@mui/material';

const AddBudget = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjectsNamesAndIds();
      setProjects(data);
    };

    fetchProjects();

    const fetchClients = async () => {
      const data = await getClientsNamesAndIds();
      setClients(data);
    };

    fetchClients();

    setStatuses(['Pending', 'Approved', 'Rejected', 'Paid']);
  }, []);

  const handleSubmit = async (
    values: budgetFormValues,
    { resetForm }: FormikHelpers<budgetFormValues>,
  ): Promise<void> => {
    try {
      await createBudget(values);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      resetForm();
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <>
      {success && (
        <Alert variant="filled" severity="success">
          Budget created successfully
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="error">
          Failed to create budget
        </Alert>
      )}

      <Formik
        initialValues={{
          total: '',
          project: { _id: '', name: '' },
          client: { _id: '', name: '' },
          status: { status: '' },
        }}
        validationSchema={validationSchema}
        onSubmit={(values: budgetFormValues, resetForm) => {
          handleSubmit(values, resetForm);
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
