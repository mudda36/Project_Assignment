import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectTypeList from './ProjectTypeList';
import CustomerList from './CustomerList';

import "./App.css";  

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                textDecoration: 'none',  
                fontWeight: 'bold',      
                color: isActive ? 'blue' : 'black',  
              })}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project-types"
              style={({ isActive }) => ({
                textDecoration: 'none',  
                fontWeight: 'bold',     
                color: isActive ? 'blue' : 'black',  
              })}
            >
              Project Types
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              style={({ isActive }) => ({
                textDecoration: 'none',  
                fontWeight: 'bold',      
                color: isActive ? 'blue' : 'black',  
              })}
            >
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project-types" element={<ProjectTypeList />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;

