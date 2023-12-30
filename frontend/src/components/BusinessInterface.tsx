import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './BusinessCard';

interface Business {
  id: number;
  name: string;
  address: string;
}

interface BusinessInterfaceProps {
  backendName: string; //go
}

const BusinessInterface: React.FC<BusinessInterfaceProps> = ({ backendName }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [newBusiness, setNewBusiness] = useState({ name: '', address: '' });
  const [updateBusiness, setUpdateBusiness] = useState({ id: '', name: '', address: '' });

  // Define styles based on the backend name
  const backgroundColors: { [key: string]: string } = {
    go: 'bg-cyan-500',
  };

  const buttonColors: { [key: string]: string } = {
    go: 'bg-cyan-700 hover:bg-blue-600',
  };

  const bgColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-gray-200';
  const btnColor = buttonColors[backendName as keyof typeof buttonColors] || 'bg-gray-500 hover:bg-gray-600';

  // Fetch all businesses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/${backendName}/businesses`);
        setBusinesses(response.data.reverse());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [backendName, apiUrl]);

  // Create a new business
  const createBusiness = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/${backendName}/businesses`, newBusiness);
      setBusinesses([response.data, ...businesses]);
      setNewBusiness({ name: '', address: '' });
    } catch (error) {
      console.error('Error creating business:', error);
    }
  };

  // Update a business
  const handleUpdateBusiness = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/api/${backendName}/businesses/${updateBusiness.id}`, { name: updateBusiness.name, address: updateBusiness.address });
      setUpdateBusiness({ id: '', name: '', address: '' });
      setBusinesses(
        businesses.map((business) => {
          if (business.id === parseInt(updateBusiness.id)) {
            return { ...business, name: updateBusiness.name, address: updateBusiness.address };
          }
          return business;
        })
      );
    } catch (error) {
      console.error('Error updating business:', error);
    }
  };

  // Delete a business
  const deleteBusiness = async (businessId: number) => {
    try {
      await axios.delete(`${apiUrl}/api/${backendName}/businesses/${businessId}`);
      setBusinesses(businesses.filter((business) => business.id !== businessId));
    } catch (error) {
      console.error('Error deleting business:', error);
    }
  }

  return (
    <div className={`user-interface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded shadow`}>
      <img src={`/${backendName}logo.svg`} alt={`${backendName} Logo`} className="w-20 h-20 mb-6 mx-auto" />
      <h2 className="text-xl font-bold text-center text-white mb-6">{`${backendName.charAt(0).toUpperCase() + backendName.slice(1)} Backend`}</h2>

      {/* Create user */}
      <form onSubmit={createBusiness} className="mb-6 p-4 bg-blue-100 rounded shadow">
        <input
          placeholder="Name"
          value={newBusiness.name}
          onChange={(e) => setNewBusiness({ ...newBusiness, name: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          placeholder="Address"
          value={newBusiness.address}
          onChange={(e) => setNewBusiness({ ...newBusiness, address: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Add User
        </button>
      </form>

      {/* Update user */}
      <form onSubmit={handleUpdateBusiness} className="mb-6 p-4 bg-blue-100 rounded shadow">
      <input
          placeholder="User Id"
          value={updateBusiness.id}
          onChange={(e) => setUpdateBusiness({ ...updateBusiness, id: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          placeholder="New Name"
          value={updateBusiness.name}
          onChange={(e) => setUpdateBusiness({ ...updateBusiness, name: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          placeholder="New Address"
          value={updateBusiness.address}
          onChange={(e) => setUpdateBusiness({ ...updateBusiness, address: e.target.value })}
          className="mb-2 w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
          Update User
        </button>
      </form>

      {/* display users */}
      <div className="space-y-4">
        {businesses.map((business) => (
          <div key={business.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <CardComponent card={business} />
            <button onClick={() => deleteBusiness(business.id)} className={`${btnColor} text-white py-2 px-4 rounded`}>
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default BusinessInterface;