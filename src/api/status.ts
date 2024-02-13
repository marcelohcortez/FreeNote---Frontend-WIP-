const getStatuses = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}status`);

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
const getStatus = () => {
  return;
};

export { getStatuses, getStatus };
