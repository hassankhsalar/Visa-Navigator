import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApplications, setFilteredApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`https://visa-navigator-portal.vercel.app/applications?email=${user.email}`);
        const data = await response.json();
        setApplications(data);
        setFilteredApplications(data); 
      } catch (err) {
        console.error('Failed to fetch applications:', err);
      }
    };

    if (user?.email) {
      fetchApplications();
    }
  }, [user]);

 
  const handleCancel = async (applicationId) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this application?');
    if (!confirmCancel) return;

    try {
      const response = await fetch(`https://visa-navigator-portal.vercel.app/applications/${applicationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        const updatedApplications = applications.filter((app) => app._id !== applicationId);
        setApplications(updatedApplications);
        setFilteredApplications(updatedApplications); 
        alert('Application canceled successfully.');
      } else {
        alert('Failed to cancel application. Please try again.');
      }
    } catch (err) {
      console.error('Error canceling application:', err);
      alert('An error occurred while canceling the application.');
    }
  };

  
  const handleSearch = () => {
    const filtered = applications.filter((app) =>
      app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  return (
    <div className="my-visa-applications">
      <h2 className="text-2xl font-bold mb-4">My Visa Applications</h2>
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by Country Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((app) => (
            <div key={app._id} className="card bg-base-100 shadow-md p-4">
              <div className="card-header mb-4">
                <img
                  src={app.countryImage}
                  alt={app.countryName}
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">{app.countryName}</h3>
              <p><strong>Visa Type:</strong> {app.visaType}</p>
              <p><strong>Processing Time:</strong> {app.processingTime} days</p>
              <p><strong>Fee:</strong> ${app.fee}</p>
              <p><strong>Validity:</strong> {app.validity} months</p>
              <p><strong>Application Method:</strong> {app.applicationMethod}</p>
              <p><strong>Applied Date:</strong> {app.appliedDate}</p>
              <p><strong>Applicant Name:</strong> {app.firstName} {app.lastName}</p>
              <p><strong>Applicant Email:</strong> {app.email}</p>
              <button
                className="btn btn-error mt-4"
                onClick={() => handleCancel(app._id)}
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default MyVisaApplications;
