import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider'; // Context to get user info

const VisaDetails = () => {
  const { id } = useParams();
  const [visa, setVisa] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    appliedDate: new Date().toISOString().split('T')[0], // Current date
    email: '',
    fee: '',
  });

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visa/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch visa details');
        }
        const data = await response.json();
        setVisa(data);

        // Set default form data for email and fee
        setFormData((prev) => ({
          ...prev,
          email: user?.email || '',
          fee: data.fee || '',
        }));
      } catch (error) {
        console.error('Error fetching visa details:', error);
        setError('Error fetching visa details');
      }
    };

    fetchVisaDetails();
  }, [id, user]);

  // Handle form submission
  const handleApply = async (e) => {
    e.preventDefault();
  
    // Construct application data
    const applicationData = {
      ...formData,
      visaId: id,
      countryName: visa.countryName,
      countryImage: visa.countryImage,
      visaType: visa.visaType,
      processingTime: visa.processingTime,
      fee: visa.fee,
      validity: visa.validity,
      applicationMethod: visa.applicationMethod,
    };
  
    try {
      console.log('Submitting application data:', applicationData);
  
      const response = await fetch('http://localhost:5000/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });
  
      if (response.ok) {
        alert('Application submitted successfully!');
        setIsModalOpen(false);
      } else {
        const errorMessage = await response.text();
        console.error('Server Error:', errorMessage);
        alert(`Failed to submit application: ${errorMessage}`);
      }
    } catch (err) {
      console.error('Error applying for visa:', err);
      alert('An unexpected error occurred while submitting the application.');
    }
  };
  
  if (error) {
    return <div>{error}</div>;
  }

  if (!visa) {
    return <div>Loading...</div>;
  }

  const {
    countryName,
    countryImage,
    visaType,
    processingTime,
    description,
    fee,
    validity,
    ageRestriction,
    applicationMethod,
  } = visa;

  return (
    <div className="visa-details p-6 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">{countryName} Visa Details</h2>
      <div className="visa-image mb-4">
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-auto max-h-48 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="visa-info mb-6">
        <p><strong>Visa Type:</strong> {visaType}</p>
        <p><strong>Processing Time:</strong> {processingTime} days</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Fee:</strong> ${fee}</p>
        <p><strong>Validity:</strong> {validity} months</p>
        <p><strong>Age Restriction:</strong> {ageRestriction} years</p>
        <p><strong>Application Method:</strong> {applicationMethod}</p>
      </div>
      <div className="visa-actions text-center">
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Apply for Visa
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              width: '400px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <h3 className="text-lg font-semibold">Apply for {countryName} Visa</h3>
            <form onSubmit={handleApply} className="space-y-4">
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={formData.email}
                disabled
              />
              {/* Fee */}
              <input
                type="text"
                placeholder="Fee"
                className="input input-bordered w-full"
                value={formData.fee}
                disabled
              />
              {/* Applied Date */}
              <input
                type="date"
                className="input input-bordered w-full"
                value={formData.appliedDate}
                disabled
              />
              {/* Modal Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
