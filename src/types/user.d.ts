interface User {
  _id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export type { User };
