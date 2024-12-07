import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const [myVisas, setMyVisas] = useState([]);
  const [editingVisa, setEditingVisa] = useState(null); // Holds the visa being edited

  // Fetch user's visas
  useEffect(() => {
    fetch(`http://localhost:5000/my-visas?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyVisas(data));
  }, [user.email]);

  // Handle delete action
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visa/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Visa has been deleted.', 'success');
              setMyVisas(myVisas.filter((visa) => visa._id !== id)); // Remove from state
            }
          });
      }
    });
  };

  // Handle update form submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedVisa = {
      countryName: form.countryName.value,
      countryImage: form.countryImage.value,
      visaType: form.visaType.value,
      processingTime: form.processingTime.value,
      description: form.description.value,
      ageRestriction: form.ageRestriction.value,
      fee: form.fee.value,
      validity: form.validity.value,
      applicationMethod: form.applicationMethod.value,
    };

    fetch(`http://localhost:5000/visa/${editingVisa._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success!', 'Visa updated successfully.', 'success');
          setMyVisas(
            myVisas.map((visa) =>
              visa._id === editingVisa._id ? { ...visa, ...updatedVisa } : visa
            )
          );
          setEditingVisa(null); // Close the modal
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">My Added Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myVisas.map((visa) => (
          <div key={visa._id} className="p-4 border rounded shadow">
            <img src={visa.countryImage} alt={visa.countryName} className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{visa.countryName}</h3>
            <p> <span className='font-bold'>Visa Type:   </span> {visa.visaType}</p>
            <p><span className='font-bold'>Processing Time:   </span>{visa.processingTime}</p>
            <p><span className='font-bold'>Visa Fee:   </span>{visa.fee}</p>
            <p><span className='font-bold'>Validity:   </span>{visa.validity}</p>
            <p><span className='font-bold'>Application Method:   </span>   {visa.applicationMethod}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setEditingVisa(visa)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleDelete(visa._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {editingVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Update Visa</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="countryName"
                defaultValue={editingVisa.countryName}
                className="w-full border p-2 rounded"
                placeholder="Country Name"
              />
              <input
                type="text"
                name="countryImage"
                defaultValue={editingVisa.countryImage}
                className="w-full border p-2 rounded"
                placeholder="Country Image URL"
              />
              <select
                name="visaType"
                defaultValue={editingVisa.visaType}
                className="w-full border p-2 rounded"
              >
                <option value="Tourist visa">Tourist Visa</option>
                <option value="Student visa">Student Visa</option>
                <option value="Official visa">Official Visa</option>
              </select>
              <input
                type="text"
                name="processingTime"
                defaultValue={editingVisa.processingTime}
                className="w-full border p-2 rounded"
                placeholder="Processing Time"
              />
              <textarea
                name="description"
                defaultValue={editingVisa.description}
                className="w-full border p-2 rounded"
                rows="3"
                placeholder="Description"
              />
              <input
                type="number"
                name="ageRestriction"
                defaultValue={editingVisa.ageRestriction}
                className="w-full border p-2 rounded"
                placeholder="Age Restriction"
              />
              <input
                type="number"
                name="fee"
                defaultValue={editingVisa.fee}
                className="w-full border p-2 rounded"
                placeholder="Fee"
              />
              <input
                type="text"
                name="validity"
                defaultValue={editingVisa.validity}
                className="w-full border p-2 rounded"
                placeholder="Validity"
              />
              <input
                type="text"
                name="applicationMethod"
                defaultValue={editingVisa.applicationMethod}
                className="w-full border p-2 rounded"
                placeholder="Application Method"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setEditingVisa(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisa;
