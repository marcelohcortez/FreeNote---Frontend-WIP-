import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Required')
    .email('Invalid')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Must be at least 6 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, 'Invalid. Example: Abc123#'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  firstName: Yup.string().matches(/^[A-Za-z]+$/, 'Should contain only letters'),
  lastName: Yup.string().matches(/^[A-Za-z]+$/, 'Should contain only letters'),
});

export default validationSchema;
