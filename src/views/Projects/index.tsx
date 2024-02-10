import React, { useState } from 'react';

import { getProjects } from '../../api/projects';
import { Project } from '../../types/project';
import AddNewItem from '../../components/AddNewItem';

const Projects = () => {
  const [projects, setProject] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProject(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>

      <AddNewItem target={'projects'} />

      {projects && (
        <ul>
          {projects.map((project: Project) => (
            <li key={project._id}>
              <p>Project name: {project.name}</p>
              <p>Project description:{project.description}</p>
              <p>Project budget:{project.budget}</p>
              <p>Project client:{project.client}</p>
              <p>Project project_status:{project.project_status}</p>
              <p>Project created_by:{project.created_by}</p>
              <p>Project edited_by:{project.edited_by}</p>
              <p>Project info_data:{project.info_data}</p>
              <p>Project website:{project.website}</p>
              <p>Project start_date:{project.start_date?.toString()}</p>
              <p>Project end_date:{project.end_date?.toString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
