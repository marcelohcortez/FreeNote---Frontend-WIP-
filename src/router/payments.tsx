import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Payments from '../views/Payments';
import PaymentsSingle from '../views/Payments/Single';

const PaymentsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Payments />} />
        <Route path=":id" element={<PaymentsSingle />} />
      </Route>
    </Routes>
  );
};

export default PaymentsRouter;
