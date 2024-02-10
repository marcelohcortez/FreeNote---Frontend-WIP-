import React from 'react';

export const OpenDrawerContext = React.createContext({
  open: true,
  setOpen: (value: boolean) => {
    // Add implementation for setOpen method here
  },
});
