// In VisaDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VisaDetails = () => {
  const { id } = useParams();  // Get the ID from the URL params
  const [visa, setVisa] = useState(null);  // State to hold visa data
  const [error, setError] = useState(null);  // State to hold error message

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visa/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch visa details');
        }
        const data = await response.json();
        setVisa(data);
      } catch (error) {
        console.error("Error fetching visa details:", error);
        setError('Error fetching visa details');
      }
    };

    fetchVisaDetails();
  }, [id]);  // Re-run the effect if the ID changes

  // Handle loading and error states
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
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  return (
    <div className="visa-details">
      <h2>{countryName} Visa Details</h2>
      <div className="visa-image">
        <img src={countryImage} alt={countryName} />
      </div>
      <div className="visa-info">
        <p><strong>Visa Type:</strong> {visaType}</p>
        <p><strong>Processing Time:</strong> {processingTime} days</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Fee:</strong> ${fee}</p>
        <p><strong>Validity:</strong> {validity} months</p>
        <p><strong>Age Restriction:</strong> {ageRestriction} years</p>
        <p><strong>Application Method:</strong> {applicationMethod}</p>
      </div>
      <div className="visa-actions">
        <button className="btn btn-primary">Apply for Visa</button>
      </div>
    </div>
  );
};

export default VisaDetails;
