import React, { useState } from 'react';

import { useAuthContext } from 'hooks/useAuthContext';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    setError(null);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setIsLoading(false);
      return;
    }

    // save the user to local storage
    localStorage.setItem('user', JSON.stringify(data));

    // update useAuthContext
    dispatch({ type: 'LOGIN', payload: data });
    setIsLoading(false);
  };
  return { signup, isLoading, error };
};

export default useSignup;
