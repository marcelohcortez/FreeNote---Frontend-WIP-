import React, { createContext, useEffect, useReducer } from 'react';

import { Action } from 'types/action';
import { AuthContextProviderProps } from 'types/authContextProviderProps';
import { State } from 'types/state';

type UserLoggedInfo = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type UserLogin = {
  userLogin: UserLoggedInfo;
  token: string;
};

type AuthContextValue = {
  user: UserLogin | null;
  dispatch: (action: Action) => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
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
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
