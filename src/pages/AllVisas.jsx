import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import VisaCards from '../components/VisaCards';


const AllVisas = () => {
  const visaData = useLoaderData(); // Fetch all visa data from the loader
  const [filteredVisas, setFilteredVisas] = useState(visaData); // State to store filtered visas
  const [selectedVisaType, setSelectedVisaType] = useState(''); // For dropdown filter

  // Function to handle filtering visas by type
  const handleVisaTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedVisaType(selectedType);

    if (selectedType) {
      const filtered = visaData.filter((visa) => visa.visaType === selectedType);
      setFilteredVisas(filtered);
    } else {
      setFilteredVisas(visaData); // Reset to show all visas when no filter is selected
    }
  };

  useEffect(() => {
    if (filteredVisas.length === 0 && selectedVisaType) {
      alert('No visas found for the selected type.');
    }
  }, [filteredVisas, selectedVisaType]);

  return (
    <div className="all-visas-container p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">All Visas</h2>

      {/* Dropdown for visa type filter */}
      <div className="flex justify-center mb-6">
        <select
          className="select select-bordered w-48"
          value={selectedVisaType}
          onChange={handleVisaTypeChange}
        >
          <option value="">Select Visa Type</option>
          <option value="Tourist visa">Tourist visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Official visa">Official visa</option>
          <option value="Business visa">Business visa</option>
        </select>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVisas.length > 0 ? (
          filteredVisas.map((visa) => (
            <VisaCards key={visa._id} visa={visa}>
              <div className="card-body">
                <h3 className="text-xl font-semibold">{visa.countryName}</h3>
                <p><strong>Visa Type:</strong> {visa.visaType}</p>
                <p><strong>Fee:</strong> ${visa.fee}</p>
                <p><strong>Processing Time:</strong> {visa.processingTime} days</p>
                <div className="card-actions mt-4">
                  <Link to={`/visa-details/${visa._id}`} className="btn btn-primary">
                    See Details
                  </Link>
                </div>
              </div>
            </VisaCards>
          ))
        ) : (
          <p className="text-center col-span-4">No visas found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};

export default AllVisas;
