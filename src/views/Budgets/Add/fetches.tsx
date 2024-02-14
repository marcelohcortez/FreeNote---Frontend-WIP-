import React from 'react';

import { getClientsNamesAndIds, getProjectsNamesAndIds } from 'api';

const fetches = (
  setProjects: (data: Array<string>) => void,
  setClients: (data: Array<string>) => void,
  setStatuses: (data: Array<string>) => void,
) => {
  const fetchProjects = async () => {
    const data = await getProjectsNamesAndIds();
    setProjects(data);
  };

  fetchProjects();

  const fetchClients = async () => {
    const data = await getClientsNamesAndIds();
    setClients(data);
  };

  fetchClients();

  setStatuses(['Pending', 'Approved', 'Rejected', 'Paid']);
};

export { fetches };
