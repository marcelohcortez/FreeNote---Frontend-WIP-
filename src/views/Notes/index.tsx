import React, { useState } from 'react';

import { getNotes } from '../../api/notes';
import { Note } from '../../types/note';
import AddNewItem from '../../components/AddNewItem';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getNotes();
      setNotes(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Notes</h1>

      <AddNewItem />

      {notes &&
        notes.map((note: Note) => (
          <div key={note._id}>
            <p>Client created_by: {note.created_by}</p>
            <div>
              Client info:
              {note.info_data?.map((info: string) => (
                <p key={note._id}>{info}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Notes;
