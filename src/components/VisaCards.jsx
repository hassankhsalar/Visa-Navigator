/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const VisaCards = ({ visa }) => {
  const navigate = useNavigate();

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
    _id,
  } = visa;

  const handleSeeDetails = () => {
    navigate(`/visa-details/${_id}`);
  };

  return (
    <div className="card lg:card-side bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <figure className="lg:w-1/3">
        <img
          src={countryImage}
          alt={countryName}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body lg:w-2/3 p-6 flex flex-col">
        <h2 className="card-title text-2xl font-bold text-gray-800">
          {countryName}
        </h2>
        <p className="text-gray-600">
          <strong>Visa Type:</strong> {visaType}
        </p>
        <p className="text-gray-600">
          <strong>Processing Time:</strong> {processingTime} days
        </p>
        <p className="text-gray-600">
          <strong>Fee:</strong> ${fee}
        </p>
        <p className="text-gray-600">
          <strong>Validity:</strong> {validity} months
        </p>
        <p className="text-gray-600">
          <strong>Application Method:</strong> {applicationMethod}
        </p>
        <div className="card-actions mt-auto flex justify-end">
          <button
            className="btn border-2 bg-secondary hover:text-white hover:bg-accent"
            onClick={handleSeeDetails}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaCards;
