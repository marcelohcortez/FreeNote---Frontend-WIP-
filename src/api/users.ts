const getUsers = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}users`);

    if (response.ok) {
      const data = response;
      return data.json();
    } else {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error('Error: error.message');
  }
};
const getUser = () => {
  return;
};
const createUser = () => {
  return;
};
const deleteUser = () => {
  return;
};
const updateUser = () => {
  return;
};

export { getUsers, getUser, createUser, deleteUser, updateUser };
