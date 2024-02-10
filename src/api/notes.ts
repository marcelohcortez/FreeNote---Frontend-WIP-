const getNotes = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}notes`);

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
const getNote = async () => {
  return;
};
const createNote = async () => {
  return;
};
const deleteNote = async () => {
  return;
};
const updateNote = async () => {
  return;
};

export { getNotes, getNote, createNote, deleteNote, updateNote };
