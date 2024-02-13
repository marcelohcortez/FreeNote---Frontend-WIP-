import * as Yup from 'yup';

const validationSchema = Yup.object({
  total: Yup.string().required('Total is required'),
  project: Yup.object().shape({
    _id: Yup.string().required('Project ID is required'),
    name: Yup.string().required('Project name is required'),
  }),
  client: Yup.object().shape({
    _id: Yup.string().required('Client ID is required'),
    name: Yup.string().required('Client name is required'),
  }),
  status: Yup.object().shape({
    status: Yup.string().required('Status is required'),
  }),
});

export default validationSchema;
