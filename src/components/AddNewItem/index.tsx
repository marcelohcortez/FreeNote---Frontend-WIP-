import React from 'react';
import { Button } from '@mui/material';

interface AddNewItemProps {
  target: string;
}

const AddNewItem: React.FC<AddNewItemProps> = ({ target }) => {
  return (
    <Button variant="contained" href={`/${target}/add`}>
      Add new
    </Button>
  );
};

export default AddNewItem;
