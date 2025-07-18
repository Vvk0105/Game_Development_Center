import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/students/")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/students/${id}/delete/`, {
      method: 'DELETE',
    })
    .then(res => {
      if (res.ok) {
        setStudents(students.filter(s => s.id !== id));
      }
    });
  };
  return (
    <div className='admin-dashboard'>
      <h2>Registered Students</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.full_name}</td>
              <td>{s.email}</td>
              <td>{s.phone_number}</td>
              <td>{s.course}</td>
              <td>{s.message}</td>
              <td>
                <button onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;