import React, { useState } from 'react';

import { getUsers } from '../../api/users';
import { User } from '../../types/user';
import AddNewItem from '../../components/AddNewItem';

const Users = () => {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <AddNewItem target={'users'} />

      {users && (
        <ul>
          {users.map((user: User) => (
            <li key={user._id}>
              <p>User email: {user.email}</p>
              <p>User firstName:{user.firstName}</p>
              <p>User lastName:{user.lastName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
