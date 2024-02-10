const getPayments = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}payments`,
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
const getPayment = () => {
  return;
};
const createPayment = () => {
  return;
};
const deletePayment = () => {
  return;
};
const updatePayment = () => {
  return;
};

export { getPayments, getPayment, createPayment, deletePayment, updatePayment };
