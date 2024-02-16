import { SignupFormValues } from 'types/signupFormValues';

const signupUser = async (values: SignupFormValues) => {
  try {
    const requestSignupUserValues = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };

    const responseSignupUser = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestSignupUserValues),
      },
    );

    if (!responseSignupUser.ok) {
      throw new Error('HTTP error ' + responseSignupUser.status);
    }

    return await responseSignupUser.json();
  } catch (error) {
    console.error('Failed to submit form:', error);
  }
};

export { signupUser };
