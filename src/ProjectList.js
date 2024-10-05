// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:JxBUuLS3"; 

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [project, setProject] = useState({ name: '', status: '', project_type_id: '', customer_id: '' });
//   const [editing, setEditing] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/projects`);
//       setProjects(response.data);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//       setError("Failed to fetch projects.");
//     }
//   };

//   const handleChange = (e) => {
//     setProject({ ...project, [e.target.name]: e.target.value });
//   };

//   const addProject = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/projects`, project);
//       fetchProjects();
//       setProject({ name: '', status: '', project_type_id: '', customer_id: '' });
//       setError('');
//     } catch (err) {
//       console.error("Error adding project:", err);
//       setError("Error adding project.");
//     }
//   };

//   const editProject = (proj) => {
//     setProject(proj);
//     setEditing(true);
//   };

//   const updateProject = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${API_URL}/projects/${project.id}`, project);
//       setEditing(false);
//       fetchProjects();
//       setProject({ name: '', status: '', project_type_id: '', customer_id: '' });
//       setError('');
//     } catch (err) {
//       console.error("Error updating project:", err);
//       setError("Error updating project.");
//     }
//   };

//   const deleteProject = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/projects/${id}`);
//       fetchProjects();
//       setError('');
//     } catch (err) {
//       console.error("Error deleting project:", err);
//       setError("Error deleting project.");
//     }
//   };

//   return (
//     <div>
//       <h2>Project List</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={editing ? updateProject : addProject}>
//         <input type="text" name="name" value={project.name} onChange={handleChange} placeholder="Project Name" required />
//         <input type="text" name="status" value={project.status} onChange={handleChange} placeholder="Status" required />
//         <input type="text" name="project_type_id" value={project.project_type_id} onChange={handleChange} placeholder="Project Type ID" required />
//         <input type="text" name="customer_id" value={project.customer_id} onChange={handleChange} placeholder="Customer ID" required />
//         <button type="submit">{editing ? "Update Project" : "Add Project"}</button>
//       </form>
//       <ul>
//         {projects.map((proj) => (
//           <li key={proj.id}>
//             {proj.name} - {proj.status}
//             <button onClick={() => editProject(proj)}>Edit</button>
//             <button onClick={() => deleteProject(proj.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;


import React, { useState } from 'react';
import "./App.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Traveler Systems', status: 'Active', project_type_id: 1, customer_id: 1 },
    { id: 2, name: 'Goods Carrier', status: 'Completed', project_type_id: 2, customer_id: 2 }
  ]);
  const [project, setProject] = useState({ name: '', status: '', project_type_id: '', customer_id: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { ...project, id: projects.length + 1 }]);  
    setProject({ name: '', status: '', project_type_id: '', customer_id: '' });
  };

  const editProject = (proj) => {
    setProject(proj);
    setEditing(true);
  };

  const updateProject = (e) => {
    e.preventDefault();
    setProjects(projects.map(p => (p.id === project.id ? project : p)));  
    setEditing(false);
    setProject({ name: '', status: '', project_type_id: '', customer_id: '' });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));  // Simulate deleting
  };

  return (
    <div>
      <h2>Project List</h2>
      <form onSubmit={editing ? updateProject : addProject}>
        <input type="text" name="name" value={project.name} onChange={handleChange} placeholder="Project Name" required />
        <input type="text" name="status" value={project.status} onChange={handleChange} placeholder="Status" required />
        <input type="text" name="project_type_id" value={project.project_type_id} onChange={handleChange} placeholder="Project Type ID" required />
        <input type="text" name="customer_id" value={project.customer_id} onChange={handleChange} placeholder="Customer ID" required />
        <button type="submit">{editing ? "Update Project" : "Add Project"}</button>
      </form>

      <ul>
        {projects.map((proj) => (
          <li key={proj.id}>
            {proj.name} - {proj.status}
            <button onClick={() => editProject(proj)}>Edit</button>
            <button onClick={() => deleteProject(proj.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
