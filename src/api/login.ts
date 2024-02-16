import { LoginFormValues } from 'types/loginFormValues';

const loginUser = async (values: LoginFormValues) => {
  try {
    const requestLoginValues = {
      email: values.email,
      password: values.password,
    };

    const responseLoginUser = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestLoginValues),
      },
    );

    if (!responseLoginUser.ok) {
      throw new Error('HTTP error ' + responseLoginUser.status);
    }

    return await responseLoginUser.json();
  } catch (error) {
    console.error('Failed to submit form:', error);
  }
};

export { loginUser };
