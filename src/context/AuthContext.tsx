import React, { createContext, useEffect, useReducer } from 'react';

import { Action } from 'types/action';
import { AuthContext as AuthContextType } from 'types/authContext';
import { AuthContextProviderProps } from 'types/authContextProviderProps';
import { State } from 'types/state';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') ?? 'null');

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  return (
    //Replace 'any' with the type of your payload object
    <AuthContext.Provider value={{ ...state, dispatch } as any}>
      {children}
    </AuthContext.Provider>
  );
};
