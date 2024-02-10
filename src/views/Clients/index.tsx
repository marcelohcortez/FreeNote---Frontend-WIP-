import React, { useState } from 'react';

import { getClients } from '../../api/clients';
import { Client } from '../../types/client';

const Clients = () => {
  const [clients, setClients] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getClients();
      setClients(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Clients</h1>

      {clients && (
        <ul>
          {clients.map((client: Client) => (
            <li key={client._id}>
              <p>Client name: {client.name}</p>
              <p>Client email:{client.email}</p>
              <p>Client phone:{client.phone}</p>
              <p>Client country:{client.country}</p>
              <p>Client created_by:{client.created_by}</p>
              <p>Client edited_by:{client.edited_by}</p>
              <p>Client address:{client.address}</p>
              <p>Client whatsapp:{client.whatsapp}</p>
              <p>Client website:{client.website}</p>
              <p>Client reference:{client.reference}</p>
              <p>Client owned_projects:{client.owned_projects}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clients;
