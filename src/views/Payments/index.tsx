import React, { useState } from 'react';

import { getPayments } from '../../api/payments';
import { Payment } from '../../types/payment';
import AddNewItem from '../../components/AddNewItem';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getPayments();
      setPayments(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Payments</h1>

      <AddNewItem />

      {payments && (
        <ul>
          {payments.map((payment: Payment) => (
            <li key={payment._id}>
              <p>Payment ammount: {payment.ammount}</p>
              <p>Payment budget:{payment.budget}</p>
              <p>Payment project:{payment.project}</p>
              <p>Payment client:{payment.client}</p>
              <p>Payment created_by:{payment.created_by}</p>
              <p>Payment edited_by:{payment.edited_by}</p>
              <p>Payment limit_date:{payment.limit_date?.toString()}</p>
              <p>Payment last_payment_value:{payment.last_payment_value}</p>
              <p>
                Payment last_payment_date:
                {payment.last_payment_date?.toString()}
              </p>
              <p>Payment next_payment_value:{payment.next_payment_value}</p>
              <p>
                Payment next_payment_date:
                {payment.next_payment_date?.toString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Payments;
