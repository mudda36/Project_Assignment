// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:JxBUuLS3"; 

// const ProjectTypeList = () => {
//   const [projectTypes, setProjectTypes] = useState([]);
//   const [projectType, setProjectType] = useState({ name: '' });
//   const [editing, setEditing] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchProjectTypes();
//   }, []);

//   const fetchProjectTypes = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/project-types`);
//       setProjectTypes(response.data);
//     } catch (err) {
//       console.error("Error fetching project types:", err);
//       setError("Failed to fetch project types.");
//     }
//   };

//   const handleChange = (e) => {
//     setProjectType({ ...projectType, [e.target.name]: e.target.value });
//   };

//   const addProjectType = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/project-types`, projectType);
//       fetchProjectTypes();
//       setProjectType({ name: '' });
//       setError('');
//     } catch (err) {
//       console.error("Error adding project type:", err);
//       setError("Error adding project type.");
//     }
//   };

//   const editProjectType = (type) => {
//     setProjectType(type);
//     setEditing(true);
//   };

//   const updateProjectType = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${API_URL}/project-types/${projectType.id}`, projectType);
//       setEditing(false);
//       fetchProjectTypes();
//       setProjectType({ name: '' });
//       setError('');
//     } catch (err) {
//       console.error("Error updating project type:", err);
//       setError("Error updating project type.");
//     }
//   };

//   const deleteProjectType = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/project-types/${id}`);
//       fetchProjectTypes();
//       setError('');
//     } catch (err) {
//       console.error("Error deleting project type:", err);
//       setError("Error deleting project type.");
//     }
//   };

//   return (
//     <div>
//       <h2>Project Type List</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={editing ? updateProjectType : addProjectType}>
//         <input type="text" name="name" value={projectType.name} onChange={handleChange} placeholder="Project Type Name" required />
//         <button type="submit">{editing ? "Update Type" : "Add Type"}</button>
//       </form>
//       <ul>
//         {projectTypes.map((type) => (
//           <li key={type.id}>
//             {type.name}
//             <button onClick={() => editProjectType(type)}>Edit</button>
//             <button onClick={() => deleteProjectType(type.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectTypeList;


import React, { useState } from 'react';
import "./App.css";

const ProjectTypeList = () => {
  const [projectTypes, setProjectTypes] = useState([
    { id: 1, name: 'Residential' },
    { id: 2, name: 'Commercial' }
  ]);
  const [projectType, setProjectType] = useState({ name: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProjectType({ ...projectType, [e.target.name]: e.target.value });
  };

  const addProjectType = (e) => {
    e.preventDefault();
    setProjectTypes([...projectTypes, { ...projectType, id: projectTypes.length + 1 }]);  
    setProjectType({ name: '' });
  };

  const editProjectType = (type) => {
    setProjectType(type);
    setEditing(true);
  };

  const updateProjectType = (e) => {
    e.preventDefault();
    setProjectTypes(projectTypes.map(t => (t.id === projectType.id ? projectType : t)));  
    setEditing(false);
    setProjectType({ name: '' });
  };

  const deleteProjectType = (id) => {
    setProjectTypes(projectTypes.filter(t => t.id !== id));  
  };

  return (
    <div>
      <h2>Project Type List</h2>
      <form onSubmit={editing ? updateProjectType : addProjectType}>
        <input type="text" name="name" value={projectType.name} onChange={handleChange} placeholder="Project Type Name" required />
        <button type="submit">{editing ? "Update Type" : "Add Type"}</button>
      </form>

      <ul>
        {projectTypes.map((type) => (
          <li key={type.id}>
            {type.name}
            <button onClick={() => editProjectType(type)}>Edit</button>
            <button onClick={() => deleteProjectType(type.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTypeList;
