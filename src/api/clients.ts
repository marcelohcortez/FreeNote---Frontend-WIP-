const getClients = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}clients`,
    );

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
const getClientsNamesAndIds = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}clients/names-and-ids`,
    );

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
const getClient = () => {
  return;
};
const createClient = () => {
  return;
};
const deleteClient = () => {
  return;
};
const updateClient = () => {
  return;
};

export {
  getClients,
  getClientsNamesAndIds,
  getClient,
  createClient,
  deleteClient,
  updateClient,
};
