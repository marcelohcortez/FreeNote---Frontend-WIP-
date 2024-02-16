import * as Yup from 'yup';

const validationSchema = Yup.object({
  total: Yup.string()
    .required('Total is required')
    .matches(/^\d+$/, "The 'Total' field should contain only numbers"),
  project: Yup.object().shape({
    name: Yup.string().required('Project name is required'),
  }),
  client: Yup.object().shape({
    name: Yup.string().required('Client name is required'),
  }),
  status: Yup.object().shape({
    status: Yup.string().required('Status is required'),
  }),
});

export default validationSchema;
