import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [data, setData] = useState({ startups: [], mentors: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/admin/all');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Startups</h2>
      <ul>
        {data.startups.map(startup => <li key={startup._id}>{startup.name}</li>)}
      </ul>
      <h2>Mentors</h2>
      <ul>
        {data.mentors.map(mentor => <li key={mentor._id}>{mentor.name}</li>)}
      </ul>
    </div>
  );
}

export default AdminDashboard;
