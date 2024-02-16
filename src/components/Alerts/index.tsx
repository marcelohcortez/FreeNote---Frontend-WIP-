import React from 'react';
import { Alert } from '@mui/material';
import { AlertsProps } from 'types/alertsProps';
import styles from './styles.module.css';

const Alerts: React.FC<AlertsProps> = ({
  successCreating = false,
  errorCreating = false,
  item = '',
}) => {
  if (successCreating) {
    return (
      <Alert variant="filled" severity="success">
        <span className={styles.capitalize}>{item}</span> created successfully
      </Alert>
    );
  }

  if (errorCreating) {
    return (
      <Alert variant="filled" severity="error">
        Error creating new {item}
      </Alert>
    );
  }
  return null;
};

export default Alerts;
