import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your project components here
import Payments from '../views/Payments';
import PaymentsSingle from '../views/Payments/Single';

const PaymentsRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Payments />} />
            <Route path="/:id" element={<PaymentsSingle />} />
        </Routes>
    );
};

export default PaymentsRouter;