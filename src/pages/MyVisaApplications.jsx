import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://localhost:5000/applications?email=${user.email}`);
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        console.error('Failed to fetch applications:', err);
      }
    };

    if (user?.email) {
      fetchApplications();
    }
  }, [user]);

  return (
    <div className="my-visa-applications">
      <h2 className="text-2xl font-bold mb-4">My Visa Applications</h2>
      <div className="grid grid-cols-1 gap-4">
        {applications.map((app) => (
          <div key={app._id} className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-bold">{app.visaId}</h3>
            <p><strong>Name:</strong> {app.firstName} {app.lastName}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Applied Date:</strong> {app.appliedDate}</p>
            <p><strong>Fee:</strong> ${app.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
