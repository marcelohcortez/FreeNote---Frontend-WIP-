import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddNewItem = () => {
  return (
    <Button variant="contained" component={Link} to={`add`}>
      Add new
    </Button>
  );
};

export default AddNewItem;
