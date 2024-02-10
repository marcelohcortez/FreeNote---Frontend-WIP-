const getProjects = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}projects`,
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
const getProject = () => {
  return;
};
const createProject = () => {
  return;
};
const deleteProject = () => {
  return;
};
const updateProject = () => {
  return;
};

export { getProjects, getProject, createProject, deleteProject, updateProject };
