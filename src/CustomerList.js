// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:JxBUuLS3"; 

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);
//   const [customer, setCustomer] = useState({ name: '' });
//   const [editing, setEditing] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/customers`);
//       setCustomers(response.data);
//     } catch (err) {
//       console.error("Error fetching customers:", err);
//       setError("Failed to fetch customers.");
//     }
//   };

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const addCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/customers`, customer);
//       fetchCustomers();
//       setCustomer({ name: '' });
//       setError('');
//     } catch (err) {
//       console.error("Error adding customer:", err);
//       setError("Error adding customer.");
//     }
//   };

//   const editCustomer = (cust) => {
//     setCustomer(cust);
//     setEditing(true);
//   };

//   const updateCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${API_URL}/customers/${customer.id}`, customer);
//       setEditing(false);
//       fetchCustomers();
//       setCustomer({ name: '' });
//       setError('');
//     } catch (err) {
//       console.error("Error updating customer:", err);
//       setError("Error updating customer.");
//     }
//   };

//   const deleteCustomer = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/customers/${id}`);
//       fetchCustomers();
//       setError('');
//     } catch (err) {
//       console.error("Error deleting customer:", err);
//       setError("Error deleting customer.");
//     }
//   };

//   return (
//     <div>
//       <h2>Customer List</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={editing ? updateCustomer : addCustomer}>
//         <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Customer Name" required />
//         <button type="submit">{editing ? "Update Customer" : "Add Customer"}</button>
//       </form>
//       <ul>
//         {customers.map((cust) => (
//           <li key={cust.id}>
//             {cust.name}
//             <button onClick={() => editCustomer(cust)}>Edit</button>
//             <button onClick={() => deleteCustomer(cust.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomerList;

import React, { useState } from 'react';
import "./App.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Sharath' },
    { id: 2, name: 'Ramjit' },
    { id: 3, name: 'Prajwal' },
  ]);
  const [customer, setCustomer] = useState({ name: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const addCustomer = (e) => {
    e.preventDefault();
    setCustomers([...customers, { ...customer, id: customers.length + 1 }]);  
    setCustomer({ name: '' });
  };

  const editCustomer = (cust) => {
    setCustomer(cust);
    setEditing(true);
  };

  const updateCustomer = (e) => {
    e.preventDefault();
    setCustomers(customers.map(c => (c.id === customer.id ? customer : c)));  
    setEditing(false);
    setCustomer({ name: '' });
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));  
  };

  return (
    <div>
      <h2>Customer List</h2>
      <form onSubmit={editing ? updateCustomer : addCustomer}>
        <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Customer Name" required />
        <button type="submit">{editing ? "Update Customer" : "Add Customer"}</button>
      </form>

      <ul>
        {customers.map((cust) => (
          <li key={cust.id}>
            {cust.name}
            <button onClick={() => editCustomer(cust)}>Edit</button>
            <button onClick={() => deleteCustomer(cust.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

