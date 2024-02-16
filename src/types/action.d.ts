type Action =
  | { type: 'LOGIN'; payload: any } // Replace 'any' with the type of your payload object
  | { type: 'LOGOUT' };

export type { Action };
