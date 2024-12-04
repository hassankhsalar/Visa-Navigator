import React from 'react';
import Swal from 'sweetalert2'

const AddVisa = () => {
  const handleAddVisa = (event) => {
    event.preventDefault();

    const form = event.target;

    const countryName = form.countryName.value;
    const countryImage = form.countryImage.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    // Collect required documents
    const requiredDocuments = Array.from(
      form.querySelectorAll('input[name="requiredDocuments"]:checked')
    ).map((checkbox) => checkbox.value);

    const newVisa = {
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
    };

    console.log(newVisa);

    // Send data to the server
    fetch('http://localhost:5000/visa', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'Visa Criteria Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Visa</h2>
        <form onSubmit={handleAddVisa} className="space-y-4">
          <div>
            <label htmlFor="countryImage" className="block font-medium text-gray-700">
              Country Image (URL)
            </label>
            <input
              type="text"
              id="countryImage"
              name="countryImage"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Paste the image URL here"
            />
          </div>
          <div>
            <label htmlFor="countryName" className="block font-medium text-gray-700">
              Country Name
            </label>
            <input
              type="text"
              id="countryName"
              name="countryName"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="visaType" className="block font-medium text-gray-700">
              Visa Type
            </label>
            <select
              id="visaType"
              name="visaType"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Visa Type
              </option>
              <option value="Tourist visa">Tourist Visa</option>
              <option value="Student visa">Student Visa</option>
              <option value="Official visa">Official Visa</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Required Documents</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="requiredDocuments" value="Valid passport" />
                <span>Valid passport</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="requiredDocuments" value="Visa application form" />
                <span>Visa application form</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent passport-sized photograph"
                />
                <span>Recent passport-sized photograph</span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="processingTime" className="block font-medium text-gray-700">
              Processing Time
            </label>
            <input
              type="text"
              id="processingTime"
              name="processingTime"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          <div>
            <label htmlFor="ageRestriction" className="block font-medium text-gray-700">
              Age Restriction
            </label>
            <input
              type="number"
              id="ageRestriction"
              name="ageRestriction"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="fee" className="block font-medium text-gray-700">
              Fee
            </label>
            <input
              type="number"
              id="fee"
              name="fee"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="validity" className="block font-medium text-gray-700">
              Validity
            </label>
            <input
              type="text"
              id="validity"
              name="validity"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="applicationMethod" className="block font-medium text-gray-700">
              Application Method
            </label>
            <input
              type="text"
              id="applicationMethod"
              name="applicationMethod"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
